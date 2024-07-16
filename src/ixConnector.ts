import { IxEthereumConnector } from "@intellax/ix-ethereum-connector";

export const ixConnector = new IxEthereumConnector({
  projectId: "45f7be8d476b33df86ee81745c666090",
  testnet: true,
  debug: true,
  createConfigParameters: {
    multiInjectedProviderDiscovery: true,
  },
  web3ModalOptions: {
    allWallets: "HIDE",
  },
  walletConnectMetadata: {
    name: "IX CONNECTOR TEST DAPP",
    description: "IX CONNECTOR TEST DAPP",
    url: "https://-", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
});
