import { ixConnector } from "./ixConnector";
import { WagmiProvider } from "@intellax/ix-ethereum-connector/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./app";
const queryClient = new QueryClient();
console.log("ixConnector", { ixConnector, QueryClientProvider, queryClient });

export function Prelude() {
  return (
    <>
      {ixConnector.wagmiConfig && (
        <WagmiProvider config={ixConnector.wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </WagmiProvider>
      )}
    </>
  );
}
