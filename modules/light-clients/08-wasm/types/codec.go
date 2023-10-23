package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"

	"github.com/cosmos/ibc-go/v8/modules/core/exported"
)

// RegisterInterfaces registers the tendermint concrete client-related
// implementations and interfaces.
func RegisterInterfaces(registry codectypes.InterfaceRegistry) {
	registry.RegisterImplementations(
		(*exported.ClientState)(nil),
		&ClientState{},
	)
	registry.RegisterImplementations(
		(*exported.ConsensusState)(nil),
		&ConsensusState{},
	)
	registry.RegisterImplementations(
		(*exported.ClientMessage)(nil),
		&ClientMessage{},
	)
	registry.RegisterImplementations(
		(*sdk.Msg)(nil),
		&MsgStoreCode{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}



// RegisterLegacyAminoCodec registers the necessary x/ibc 29-fee interfaces and concrete types
// on the provided LegacyAmino codec. These types are used for Amino JSON serialization.
func RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgStoreCode{}, "cosmos-sdk/MsgStoreCode", nil)
}

var (
	amino = codec.NewLegacyAmino()

	// ModuleCdc references the global x/ibc 29-fee module codec. Note, the codec
	// should ONLY be used in certain instances of tests and for JSON encoding.
	//
	// The actual codec used for serialization should be provided to x/ibc 29-fee and
	// defined at the application level.
	ModuleCdc = codec.NewProtoCodec(codectypes.NewInterfaceRegistry())
)

func init() {
	RegisterLegacyAminoCodec(amino)
	amino.Seal()
}
