package keeper_test

import (
	"crypto/sha256"
	"encoding/json"
	"errors"
	"testing"

	wasmvm "github.com/CosmWasm/wasmvm"
	wasmvmtypes "github.com/CosmWasm/wasmvm/types"
	dbm "github.com/cosmos/cosmos-db"
	testifysuite "github.com/stretchr/testify/suite"

	"cosmossdk.io/log"
	storetypes "cosmossdk.io/store/types"

	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/runtime"
	simtestutil "github.com/cosmos/cosmos-sdk/testutil/sims"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"

	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/internal/ibcwasm"
	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"
	wasmtesting "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/testing"
	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/testing/simapp"
	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"
	clienttypes "github.com/cosmos/ibc-go/v8/modules/core/02-client/types"
	host "github.com/cosmos/ibc-go/v8/modules/core/24-host"
	"github.com/cosmos/ibc-go/v8/modules/core/exported"
	ibctesting "github.com/cosmos/ibc-go/v8/testing"
)

const (
	defaultWasmClientID = "08-wasm-0"
)

type KeeperTestSuite struct {
	testifysuite.Suite

	coordinator *ibctesting.Coordinator

	// mockVM is a mock wasm VM that implements the WasmEngine interface
	mockVM *wasmtesting.MockWasmEngine
	chainA *ibctesting.TestChain
}

func init() {
	ibctesting.DefaultTestingAppInit = setupTestingApp
}

// setupTestingApp provides the duplicated simapp which is specific to the 08-wasm module on chain creation.
func setupTestingApp() (ibctesting.TestingApp, map[string]json.RawMessage) {
	db := dbm.NewMemDB()
	app := simapp.NewSimApp(log.NewNopLogger(), db, nil, true, simtestutil.EmptyAppOptions{}, nil)
	return app, app.DefaultGenesis()
}

// GetSimApp returns the duplicated SimApp from within the 08-wasm directory.
// This must be used instead of chain.GetSimApp() for tests within this directory.
func GetSimApp(chain *ibctesting.TestChain) *simapp.SimApp {
	app, ok := chain.App.(*simapp.SimApp)
	if !ok {
		panic(errors.New("chain is not a simapp.SimApp"))
	}
	return app
}

func (suite *KeeperTestSuite) SetupTest() {
	suite.coordinator = ibctesting.NewCoordinator(suite.T(), 1)
	suite.chainA = suite.coordinator.GetChain(ibctesting.GetChainID(1))

	queryHelper := baseapp.NewQueryServerTestHelper(suite.chainA.GetContext(), GetSimApp(suite.chainA).InterfaceRegistry())
	types.RegisterQueryServer(queryHelper, GetSimApp(suite.chainA).WasmClientKeeper)
}

// SetupWasmWithMockVM sets up mock cometbft chain with a mock vm.
func (suite *KeeperTestSuite) SetupWasmWithMockVM() {
	ibctesting.DefaultTestingAppInit = suite.setupWasmWithMockVM

	suite.coordinator = ibctesting.NewCoordinator(suite.T(), 1)
	suite.chainA = suite.coordinator.GetChain(ibctesting.GetChainID(1))

	_ = storeWasmCode(suite, wasmtesting.Code)
}

func (suite *KeeperTestSuite) setupWasmWithMockVM() (ibctesting.TestingApp, map[string]json.RawMessage) {
	suite.mockVM = wasmtesting.NewMockWasmEngine()

	suite.mockVM.InstantiateFn = func(checksum wasmvm.Checksum, env wasmvmtypes.Env, info wasmvmtypes.MessageInfo, initMsg []byte, store wasmvm.KVStore, goapi wasmvm.GoAPI, querier wasmvm.Querier, gasMeter wasmvm.GasMeter, gasLimit uint64, deserCost wasmvmtypes.UFraction) (*wasmvmtypes.Response, uint64, error) {
		var payload types.InstantiateMessage
		err := json.Unmarshal(initMsg, &payload)
		suite.Require().NoError(err)

		store.Set(host.ClientStateKey(), clienttypes.MustMarshalClientState(suite.chainA.App.AppCodec(), payload.ClientState))
		store.Set(host.ConsensusStateKey(payload.ClientState.LatestHeight), clienttypes.MustMarshalConsensusState(suite.chainA.App.AppCodec(), payload.ConsensusState))
		return nil, 0, nil
	}

	suite.mockVM.RegisterQueryCallback(types.StatusMsg{}, func(checksum wasmvm.Checksum, env wasmvmtypes.Env, queryMsg []byte, store wasmvm.KVStore, goapi wasmvm.GoAPI, querier wasmvm.Querier, gasMeter wasmvm.GasMeter, gasLimit uint64, deserCost wasmvmtypes.UFraction) ([]byte, uint64, error) {
		resp, err := json.Marshal(types.StatusResult{Status: exported.Active.String()})
		suite.Require().NoError(err)
		return resp, wasmtesting.DefaultGasUsed, nil
	})

	db := dbm.NewMemDB()
	app := simapp.NewSimApp(log.NewNopLogger(), db, nil, true, simtestutil.EmptyAppOptions{}, suite.mockVM)

	// reset DefaultTestingAppInit to its original value
	ibctesting.DefaultTestingAppInit = setupTestingApp
	return app, app.DefaultGenesis()
}

// storeWasmCode stores the wasm code on chain and returns the code hash.
func storeWasmCode(suite *KeeperTestSuite, wasmCode []byte) []byte {
	ctx := suite.chainA.GetContext().WithBlockGasMeter(storetypes.NewInfiniteGasMeter())

	msg := types.NewMsgStoreCode(authtypes.NewModuleAddress(govtypes.ModuleName).String(), wasmCode)
	response, err := GetSimApp(suite.chainA).WasmClientKeeper.StoreCode(ctx, msg)
	suite.Require().NoError(err)
	suite.Require().NotNil(response.Checksum)
	return response.Checksum
}

func (suite *KeeperTestSuite) SetupSnapshotterWithMockVM() *simapp.SimApp {
	suite.mockVM = wasmtesting.NewMockWasmEngine()

	return simapp.SetupWithSnapshotter(suite.T(), suite.mockVM)
}

func TestKeeperTestSuite(t *testing.T) {
	testifysuite.Run(t, new(KeeperTestSuite))
}

func (suite *KeeperTestSuite) TestNewKeeper() {
	vm := keeper.NewWasmVM(types.DefaultWasmConfig(""))

	testCases := []struct {
		name          string
		instantiateFn func()
		expPass       bool
		expError      error
	}{
		{
			"success",
			func() {
				keeper.NewKeeperWithConfig(
					GetSimApp(suite.chainA).AppCodec(),
					runtime.NewKVStoreService(GetSimApp(suite.chainA).GetKey(types.StoreKey)),
					GetSimApp(suite.chainA).IBCKeeper.ClientKeeper,
					GetSimApp(suite.chainA).WasmClientKeeper.GetAuthority(),
					vm,
				)
			},
			true,
			nil,
		},
		{
			"failure: empty authority",
			func() {
				keeper.NewKeeperWithConfig(
					GetSimApp(suite.chainA).AppCodec(),
					runtime.NewKVStoreService(GetSimApp(suite.chainA).GetKey(types.StoreKey)),
					GetSimApp(suite.chainA).IBCKeeper.ClientKeeper,
					"", // authority
					vm,
				)
			},
			false,
			errors.New("authority must be non-empty"),
		},
		{
			"failure: nil client keeper",
			func() {
				keeper.NewKeeperWithConfig(
					GetSimApp(suite.chainA).AppCodec(),
					runtime.NewKVStoreService(GetSimApp(suite.chainA).GetKey(types.StoreKey)),
					nil,
					GetSimApp(suite.chainA).WasmClientKeeper.GetAuthority(),
					vm,
				)
			},
			false,
			errors.New("client keeper must be not nil"),
		},
		{
			"failure: nil store service",
			func() {
				keeper.NewKeeperWithConfig(
					GetSimApp(suite.chainA).AppCodec(),
					nil, // store service
					GetSimApp(suite.chainA).IBCKeeper.ClientKeeper,
					GetSimApp(suite.chainA).WasmClientKeeper.GetAuthority(),
					vm,
				)
			},
			false,
			errors.New("store service must be not nil"),
		},
	}

	for _, tc := range testCases {
		tc := tc
		suite.SetupTest()

		suite.Run(tc.name, func() {
			if tc.expPass {
				suite.Require().NotPanics(
					tc.instantiateFn,
				)
			} else {
				suite.Require().PanicsWithError(tc.expError.Error(), func() {
					tc.instantiateFn()
				})
			}
		})
	}
}

func (suite *KeeperTestSuite) TestGetCodeHashes() {
	testCases := []struct {
		name      string
		malleate  func()
		expResult func(codeHashes []keeper.CodeHash)
	}{
		{
			"success: no contract stored.",
			func() {},
			func(codeHashes []keeper.CodeHash) {
				suite.Require().Len(codeHashes, 0)
			},
		},
		{
			"success: default mock vm contract stored.",
			func() {
				suite.SetupWasmWithMockVM()
			},
			func(codeHashes []keeper.CodeHash) {
				suite.Require().Len(codeHashes, 1)
				expectedCodeHash := sha256.Sum256(wasmtesting.Code)
				suite.Require().Equal(keeper.CodeHash(expectedCodeHash[:]), codeHashes[0])
			},
		},
		{
			"success: non-empty code hashes",
			func() {
				suite.SetupWasmWithMockVM()

				err := ibcwasm.CodeHashes.Set(suite.chainA.GetContext(), keeper.CodeHash("codehash"))
				suite.Require().NoError(err)
			},
			func(codeHashes []keeper.CodeHash) {
				suite.Require().Len(codeHashes, 2)
				suite.Require().Contains(codeHashes, keeper.CodeHash("codehash"))
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		suite.Run(tc.name, func() {
			tc.malleate()

			codeHashes, err := GetSimApp(suite.chainA).WasmClientKeeper.GetAllCodeHashes(suite.chainA.GetContext())
			suite.Require().NoError(err)
			tc.expResult(codeHashes)
		})
	}
}

func (suite *KeeperTestSuite) TestAddCodeHash() {
	suite.SetupWasmWithMockVM()

	codeHashes, err := GetSimApp(suite.chainA).WasmClientKeeper.GetAllCodeHashes(suite.chainA.GetContext())
	suite.Require().NoError(err)
	// default mock vm contract is stored
	suite.Require().Len(codeHashes, 1)

	codeHash1 := keeper.CodeHash("codehash1")
	codeHash2 := keeper.CodeHash("codehash2")
	err = ibcwasm.CodeHashes.Set(suite.chainA.GetContext(), codeHash1)
	suite.Require().NoError(err)
	err = ibcwasm.CodeHashes.Set(suite.chainA.GetContext(), codeHash2)
	suite.Require().NoError(err)

	// Test adding the same code hash twice
	err = ibcwasm.CodeHashes.Set(suite.chainA.GetContext(), codeHash1)
	suite.Require().NoError(err)

	codeHashes, err = GetSimApp(suite.chainA).WasmClientKeeper.GetAllCodeHashes(suite.chainA.GetContext())
	suite.Require().NoError(err)
	suite.Require().Len(codeHashes, 3)
	suite.Require().Contains(codeHashes, codeHash1)
	suite.Require().Contains(codeHashes, codeHash2)
}

func (suite *KeeperTestSuite) TestHasCodeHash() {
	var codeHash keeper.CodeHash

	testCases := []struct {
		name       string
		malleate   func()
		exprResult bool
	}{
		{
			"success: code hash exists",
			func() {
				codeHash = keeper.CodeHash("codehash")
				err := ibcwasm.CodeHashes.Set(suite.chainA.GetContext(), codeHash)
				suite.Require().NoError(err)
			},
			true,
		},
		{
			"success: code hash does not exist",
			func() {
				codeHash = keeper.CodeHash("non-existent-codehash")
			},
			false,
		},
	}

	for _, tc := range testCases {
		tc := tc
		suite.Run(tc.name, func() {
			suite.SetupWasmWithMockVM()

			tc.malleate()

			result := GetSimApp(suite.chainA).WasmClientKeeper.HasCodeHash(suite.chainA.GetContext(), codeHash)
			suite.Require().Equal(tc.exprResult, result)
		})
	}
}
