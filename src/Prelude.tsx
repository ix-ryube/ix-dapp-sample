import { ixConnector } from "./ixConnector";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./app";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

console.log("ixConnector", { ixConnector, QueryClientProvider, queryClient });

export function Prelude() {
  return (
    <WagmiProvider config={ixConnector.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
