import {
  useChainId,
  useSwitchChain,
} from "@intellax/ix-ethereum-connector/wagmi";

export function SwitchChain() {
  const chainId = useChainId();
  const { chains, error, switchChain, status, data } = useSwitchChain();

  return (
    <>
      <div className="content">
        <h2>Switch Chain</h2>
        {/* {chain && <p>Connected to {chain.name}</p>} */}
        <div className="field is-grouped">
          {chains.map((chain) => (
            <div className="control">
              <button
                className="button is-primary"
                disabled={chain.id === chainId || status === "pending"}
                key={chain.id}
                onClick={() => switchChain({ chainId: chain.id })}
              >
                {chain.name}
                {chain.id !== chainId && status === "pending" && "(switching)"}
              </button>
            </div>
          ))}
        </div>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        <div>{error && error.message}</div>
      </div>
    </>
  );
}
