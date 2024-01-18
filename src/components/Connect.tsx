import {
  useAccount,
  useConnect,
  useDisconnect,
} from "@intellax/ix-ethereum-connector/wagmi";

export function Connect() {
  const { connector: activeConnector, isConnected, address } = useAccount();

  const { connect, connectors, error, status } = useConnect();
  const { disconnect, reset } = useDisconnect();

  return (
    <div className="card my-5">
      <header className="card-header">
        <p className="card-header-title">Connect Wallet</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${address}`}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Connected to {activeConnector?.name}</p>
            <p className="subtitle is-6">Address: {address}</p>
            {error && <p className="help is-error">{error.message}</p>}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        {isConnected ? (
          <>
            <a className="card-footer-item" onClick={() => disconnect()}>
              disconnect
            </a>
            <a className="card-footer-item" onClick={() => reset()}>
              reset
            </a>
          </>
        ) : (
          connectors.map((connector) => {
            return (
              <button
                className="card-footer-item"
                key={connector.id}
                disabled={status === "pending"}
                onClick={() => {
                  connect({ connector });
                }}
              >
                {connector.name}
                {status === "pending" &&
                  activeConnector?.id === connector.id &&
                  " (connecting)"}
              </button>
            );
          })
        )}
      </footer>
    </div>
  );
}
