package types_test

import (
	"encoding/base64"
	"encoding/json"
	"fmt"

	wasmvm "github.com/CosmWasm/wasmvm"
	wasmvmtypes "github.com/CosmWasm/wasmvm/types"

	wasmtesting "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/testing"
	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"
	clienttypes "github.com/cosmos/ibc-go/v8/modules/core/02-client/types"
	"github.com/cosmos/ibc-go/v8/modules/core/exported"
)

func (suite *TypesTestSuite) TestExportGenesisGrandpa() {
	suite.SetupWasmGrandpa()

	clientStateData, err := base64.StdEncoding.DecodeString(suite.testData["client_state_data"])
	suite.Require().NoError(err)

	clientState := types.NewClientState(clientStateData, suite.codeHash, clienttypes.NewHeight(2000, 4))
	gm := clientState.ExportMetadata(suite.store)
	suite.Require().NotNil(gm, "client returned nil")
	suite.Require().Len(gm, 0, "exported metadata has unexpected length")
}

// expected export ordering:
// processed height and processed time per height
// then all iteration keys
func (suite *TypesTestSuite) TestExportMetadata() {
	suite.SetupWasmWithMockVM()

	type exportMetadataResult struct {
		GenesisMetadata []clienttypes.GenesisMetadata `json:"genesis_metadata"`
	}

	expectedMetadata := exportMetadataResult{
		GenesisMetadata: []clienttypes.GenesisMetadata{
			{
				Key:   []byte("foo"),
				Value: []byte("bar"),
			},
		},
	}

	suite.mockVM.QueryFn = func(codeID wasmvm.Checksum, env wasmvmtypes.Env, queryMsg []byte, store wasmvm.KVStore, goapi wasmvm.GoAPI, querier wasmvm.Querier, gasMeter wasmvm.GasMeter, gasLimit uint64, deserCost wasmvmtypes.UFraction) ([]byte, uint64, error) {
		var qm types.QueryMsg
		if err := json.Unmarshal(queryMsg, &qm); err != nil {
			panic(err)
		}

		if qm.ExportMetadata != nil {
			resp, err := json.Marshal(expectedMetadata)
			if err != nil {
				panic(err)
			}
			return resp, wasmtesting.DefaultGasUsed, nil
		}

		if qm.Status != nil {
			resp := fmt.Sprintf(`{"status":"%s"}`, exported.Active)
			return []byte(resp), wasmtesting.DefaultGasUsed, nil
		}
		panic("unrecognized query message")
	}

	// test intializing client and exporting metadata
	endpoint := wasmtesting.NewWasmEndpoint(suite.chainA)
	err := endpoint.CreateClient()
	suite.Require().NoError(err)

	clientState := endpoint.GetClientState()

	gm := clientState.ExportMetadata(suite.chainA.App.GetIBCKeeper().ClientKeeper.ClientStore(suite.chainA.GetContext(), endpoint.ClientID))
	suite.Require().Len(gm, 1, "exported metadata has unexpected length")
	suite.Require().Equal(string(gm[0].GetKey()), "foo")
	suite.Require().Equal(string(gm[0].GetValue()), "bar")
}
