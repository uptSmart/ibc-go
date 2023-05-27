---
title: Set Up Your Work Environment
sidebar_label: Set Up Your Work Environment
sidebar_position: 1
slug: /tutorials/cosmwasm/setup-env
---

# Set Up Your Work Environment

On this page, you can find helpful links to set up your work environment.

:::info

In this section, you can find all you need to install:

- [Rust](https://www.rust-lang.org/tools/install)
- [Go](https://go.dev/)
- [Hermes](https://hermes.informal.systems/)
- [Node.js](https://nodejs.org/en/)
- [wasmd](https://github.com/CosmWasm/wasmd)
- [Docker](https://www.docker.com/) or [Gaiad Manager](https://github.com/informalsystems/gm)

:::

:::note

On a general note, it is advisable to prepare a separate project folder to keep all your Cosmos exercises.

:::

## Rust

Install the latest version of rust following the instructions on the [Rust website](https://www.rust-lang.org/tools/install).

## Go

Install the latest version of Go following the instructions on the [Go website](https://go.dev/).

## Hermes

Install the latest version of Hermes relayer via cargo following the instructions on the [Hermes website](https://hermes.informal.systems/quick-start/installation.html#install-via-cargo).

## Node.js

Install the latest version of Node.js following the instructions on the [Node.js website](https://nodejs.org/en/).

## wasmd

Navigate to a suitable directory and clone the wasmd repo, in this guide we will be using wasmd `v0.40.0` since at this time, it is the latest version using Cosmos SDK v0.47 and ibc-go v7.

```bash
git clone https://github.com/CosmWasm/wasmd.git -b v0.40.0
```

To build wasmd, run the following command:

```bash
cd wasmd/
make install
```

This will create the `wasmd` binary in your `$HOME/go/bin` directory. To test if the binary is working, run the following command:

```bash
wasmd version
```

You should see the following output:

```bash
0.40.0
```

## Docker

Docker is used for testing and is interchangeable with the Gaiad Manager (which doesn't use docker). To install Docker, follow the instructions on the [Install Docker Engine Page](https://docs.docker.com/engine/install/).

## Gaiad Manager

The Gaiad Manager is a tool that allows you to run multiple Cosmos SDK nodes on your local machine. To install the Gaiad Manager, follow the instructions on the [Gaiad Manager GitHub Page](https://github.com/informalsystems/gm).

## Visual Studio Code Extensions

If Visual Studio Code is your preferred IDE, then the following extensions are recommended.

- [Rust Analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer)
- [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)
- [Better TOML](https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
