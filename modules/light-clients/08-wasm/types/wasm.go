package types

import (
	"bytes"
	"slices"

	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCodeHashes returns all the code hashes stored.
func GetCodeHashes(ctx sdk.Context, cdc codec.BinaryCodec, key storetypes.StoreKey) (CodeHashes, error) {
	store := ctx.KVStore(key)
	bz := store.Get([]byte(KeyCodeHashes))
	if len(bz) == 0 {
		return CodeHashes{}, nil
	}

	var hashes CodeHashes
	err := cdc.Unmarshal(bz, &hashes)
	if err != nil {
		return CodeHashes{}, err
	}

	return hashes, nil
}

// AddCodeHash adds a new code hash to the list of stored code hashes.
func AddCodeHash(ctx sdk.Context, cdc codec.BinaryCodec, key storetypes.StoreKey, codeHash []byte) error {
	codeHashes, err := GetCodeHashes(ctx, cdc, key)
	if err != nil {
		return err
	}

	codeHashes.Hashes = append(codeHashes.Hashes, codeHash)

	store := ctx.KVStore(key)
	bz, err := cdc.Marshal(&codeHashes)
	if err != nil {
		return err
	}

	store.Set([]byte(KeyCodeHashes), bz)

	return nil
}

// HasCodeHash returns true if the given code hash exists in the store and
// false otherwise.
func HasCodeHash(ctx sdk.Context, cdc codec.BinaryCodec, key storetypes.StoreKey, codeHash []byte) bool {
	codeHashes, err := GetCodeHashes(ctx, cdc, key)
	if err != nil {
		return false
	}

	return slices.ContainsFunc(codeHashes.Hashes, func(h []byte) bool { return bytes.Equal(codeHash, h) })
}
