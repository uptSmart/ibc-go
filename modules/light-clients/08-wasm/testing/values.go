package testing

import (
	"crypto/sha256"
	"errors"

	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"
	clienttypes "github.com/cosmos/ibc-go/v8/modules/core/02-client/types"
)

var (
	// Represents the code of the wasm contract used in the tests with a mock vm.
	Code                              = []byte("01234567012345670123456701234567")
	CodeHash                          = sha256.Sum256(Code)
	contractClientState               = []byte{1}
	contractConsensusState            = []byte{2}
	ErrMockContract                   = errors.New("mock contract error")
	MockClientStateBz                 = []byte("client-state-data")
	MockConsensusStateBz              = []byte("consensus-state-data")
	MockWasmClientState               = types.NewClientState(contractClientState, CodeHash[:], clienttypes.ZeroHeight())
	MockValidProofBz                  = []byte("valid proof")
	MockInvalidProofBz                = []byte("invalid proof")
	MockUpgradedClientStateProofBz    = []byte("upgraded client state proof")
	MockUpgradedConsensusStateProofBz = []byte("upgraded consensus state proof")
)
