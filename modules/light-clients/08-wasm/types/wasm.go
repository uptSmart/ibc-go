package types

import (
	"context"

	wasmvm "github.com/CosmWasm/wasmvm"

	"github.com/cosmos/ibc-go/modules/light-clients/08-wasm/internal/ibcwasm"
)

// CodeHash is a type alias used for wasm byte code checksums.
type CodeHash wasmvm.Checksum

// GetAllCodeHashes is a helper to get all code hashes from the store.
// It returns an empty slice if no code hashes are found
func GetAllCodeHashes(ctx context.Context) ([]CodeHash, error) {
	iterator, err := ibcwasm.CodeHashes.Iterate(ctx, nil)
	if err != nil {
		return nil, err
	}

	keys, err := iterator.Keys()
	if err != nil {
		return nil, err
	}

	codeHashes := []CodeHash{}
	for _, key := range keys {
		codeHashes = append(codeHashes, key)
	}

	return codeHashes, nil
}

// HasCodeHash returns true if the given checksum exists in the store and
// false otherwise.
func HasCodeHash(ctx context.Context, codeHash CodeHash) bool {
	found, err := ibcwasm.CodeHashes.Has(ctx, codeHash)
	if err != nil {
		return false
	}

	return found
}

func CreateChecksum(code []byte) (CodeHash, error) {
	checksum, err := wasmvm.CreateChecksum(code)
	if err != nil {
		return CodeHash{}, err
	}
	return CodeHash(checksum), nil
}
