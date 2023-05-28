---
title: Making an IBC Enabled Counter Smart Contract
sidebar_label: Making an IBC Enabled Counter Smart Contract
sidebar_position: 3
slug: /tutorials/cosmwasm/making-counter-contract
---

import HighlightBox from '@site/src/components/HighlightBox';

# Making an IBC Enabled Counter Smart Contract

In the following sections, we will create a simple IBC enabled smart contract which expects to be deployed on two chains that will count the number of times it receives ibc messages. This tutorial is based on the [Cosmwasm IBC Example](https://github.com/0xekez/cw-ibc-example/tree/main) repository, much thanks to [0xekez](https://github.com/0xekez) for the original work.

## Background

To connect two CosmWasm contracts over IBC you must establish an IBC channel between them. CosmWasm smart contracts interact with the IBC protocol as cosmos modules. Recall the [requirements](/main/ibc/overview#what-is-the-interblockchain-communication-protocol-ibc) for a **cosmos module** to interact with IBC:

<HighlightBox type="remember" title="Remember">

1. Bind to a port.
2. Define your packet data.
3. Use the default acknowledgment struct provided by core IBC or optionally define a custom acknowledgment struct.
4. Standardize an encoding of the packet data.
5. Implement the [`IBCModule` interface](https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/module.go#L12-L107).

</HighlightBox>

Wasmd takes care of the first requirement by binding each contract to a unique port (`wasm.<CONTRACT_ADDRESS>`) if the entry points below are implemented. The remaining requirements are left to the developer to implement using the 6 entry points listed above.

Requirement 5 asserts that the smart contract must implement the following entry points:

1. `ibc_channel_open` - Handles the `OpenInit` and `OpenTry` handshake
   steps.
2. `ibc_channel_connect` - Handles the `OpenAck` and `OpenConfirm`
   handshake steps.
3. `ibc_channel_close` - Handles the closing of an IBC channel by the
   counterparty.
4. `ibc_packet_receive` - Handles receiving IBC packets from the
   counterparty.
5. `ibc_packet_ack` - Handles ACK messages from the counterparty. This
   is effectively identical to the ACK message type in
   [TCP](https://developer.mozilla.org/en-US/docs/Glossary/TCP_handshake).
6. `ibc_packet_timeout` - Handles packet timeouts.
