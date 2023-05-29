---
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 4
slug: /tutorials/cosmwasm/getting-started
---

import HighlightBox from '@site/src/components/HighlightBox';

# Getting Started

<HighlightBox type="learning" title="Section Goals">

In this section you will,

- FILL.

</HighlightBox>

We will start with the [cw-template](https://github.com/CosmWasm/cw-template) contract, which is a simple counter contract which counts the number of times it receives the `{ "increment": {} }` execute message. We will modify it to handle IBC packets and messages.

To generate the counter template contract, run:

```bash
cargo generate --git https://github.com/CosmWasm/cw-template.git --name ibc-counter-contract -d minimal=false
```

<HighlightBox type="best-practice" title="Unneeded Files">

In the generated template, we've removed the following files and directories. Feel to do the same: 

- `.github/`
- `.gitpod.Dockerfile`
- `.gitpod.yml`

</HighlightBox>

<HighlightBox type="note" title="Note">

The first time you launch the code in VSCode, it will generate the `Cargo.lock` file. This file is used to lock the versions of the dependencies used in the project. It is recommended to commit this file to the repository.

</HighlightBox>
