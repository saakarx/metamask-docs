---
sidebar_label: Other web frameworks
sidebar_position: 3
description: Set up the SDK in other web frameworks.
tags:
  - JavaScript SDK
---

# Use MetaMask SDK with other web frameworks

Import [MetaMask SDK](../../../../concepts/sdk/index.md) into your web dapp to enable your users to
easily connect to the MetaMask browser extension and MetaMask Mobile.
The SDK for other web frameworks has the [same prerequisites](index.md#prerequisites) as for
standard JavaScript.

## Steps

### 1. Install the SDK

In your project directory, install the SDK using Yarn or npm:

```bash
yarn add @metamask/sdk
```

or

```bash
npm i @metamask/sdk
```

### 2. Import the SDK

In your project script, add the following to import the SDK:

```javascript
import { MetaMaskSDK } from '@metamask/sdk';
```

### 3. Instantiate the SDK

Instantiate the SDK using any [options](../../../../reference/sdk-js-options.md):

```javascript
const MMSDK = new MetaMaskSDK(
  dappMetadata: {
    name: "Example JavaScript Dapp",
    url: window.location.href,
  }
  // Other options
);

const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
```

:::note Important SDK options
- Use [`dappMetadata`](../../../../reference/sdk-js-options.md#dappmetadata) to display information
  about your dapp in the MetaMask connection modal.
- Use [`modals`](../../../../reference/sdk-js-options.md#modals) to [customize the logic and UI of
  the displayed modals](../../../display/custom-modals.md).
- Use [`infuraAPIKey`](../../../../reference/sdk-js-options.md#infuraapikey) to
  [make read-only RPC requests](../../../use-3rd-party-integrations/js-infura-api.md) from your dapp.
:::

### 4. Use the SDK

Use the SDK by calling any [provider API methods](../../../../reference/provider-api.md).
Always call [`eth_requestAccounts`](/wallet/reference/eth_requestaccounts) using
[`ethereum.request()`](../../../../reference/provider-api.md#ethereumrequestargs) first, since it
prompts the installation or connection popup to appear.

```javascript
ethereum.request({ method: 'eth_requestAccounts', params: [] });
```

## Example

You can copy the full JavaScript example to get started:

```javascript title="index.js"
import { MetaMaskSDK } from '@metamask/sdk';

const MMSDK = new MetaMaskSDK(
  dappMetadata: {
    name: "Example JavaScript Dapp",
    url: window.location.href,
  }
  // Other options
);

const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

ethereum.request({ method: 'eth_requestAccounts', params: [] });
```

See the [example JavaScript dapps](https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples)
in the JavaScript SDK GitHub repository for more information.
