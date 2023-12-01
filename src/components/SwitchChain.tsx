import {
  useNetwork,
  useSwitchNetwork,
} from "@intellax/ix-ethereum-connector/wagmi";

export function SwitchChain() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <>
      <div className="content">
        <h2>Switch Chain</h2>
        {chain && <p>Connected to {chain.name}</p>}
        <div className="field is-grouped">
          {chains.map((x) => (
            <div className="control">
              <button
                className="button is-primary"
                disabled={!switchNetwork || x.id === chain?.id}
                key={x.id}
                onClick={() => switchNetwork?.(x.id)}
              >
                {x.name}
                {isLoading && pendingChainId === x.id && " (switching)"}
              </button>
            </div>
          ))}
        </div>
        {chain && <pre>{JSON.stringify(chain, null, 2)}</pre>}

        <div>{error && error.message}</div>
      </div>
    </>
  );
}
