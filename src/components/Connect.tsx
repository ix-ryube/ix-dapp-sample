import {
  useAccount,
  useAccountEffect,
  useClient,
  useConnect,
  useDisconnect,
} from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { useEffect } from "react";

export function Connect() {
  const {
    connector: activeConnector,
    isConnected,
    address,
    status: accountSatatus,
  } = useAccount();
  const client = useClient();
  const { connect, connectors, error, status, data } = useConnect();
  const { disconnect, reset } = useDisconnect();
  const { open } = useWeb3Modal();
  useAccountEffect({
    onConnect(data) {
      console.log("Connected!", data);
      data.connector.getProvider().then((provider) => {
        console.log("provider", provider);
      });
    },
    onDisconnect() {
      console.log("Disconnected!");
    },
  });
  useEffect(() => {
    console.log("client", { client, data, activeConnector, isConnected });
  }, [client, data, activeConnector, isConnected]);

  useEffect(() => {
    console.log("activeConnector", { activeConnector, accountSatatus });
    if (activeConnector?.getProvider) {
      activeConnector.getProvider().then((provider) => {
        console.log("activeConnector provider", provider);
      });
    }
  }, [activeConnector, accountSatatus]);
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
            {status && <p className="help is-info">{status}</p>}
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
                  if (connector.name === "WalletConnect") {
                    open();
                  } else {
                    connect({ connector });
                  }
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
