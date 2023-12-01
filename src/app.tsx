import { Connect } from "./components/Connect";
import { ixConnector } from "./ixConnector";
import { SignMessage } from "./components/SignMessage";
import { SwitchChain } from "./components/SwitchChain";
import { SendTx } from "./components/SendTx";
import { WagmiConfig } from "@intellax/ix-ethereum-connector/wagmi";

export function App() {
  return (
    <WagmiConfig config={ixConnector.wagmiConfig}>
      <div className="hero-body">
        <div className="container">
          <div className="bd-hero-body">
            <div className="bd-hero-heading">
              <h1 className="title algolia-lvl0">
                <span className="icon">
                  <i className="fas fa-rocket"></i>
                </span>

                <p>
                  The{" "}
                  <code className="language-plaintext highlighter-rouge">
                    @intellax/ix-ethereum-connector
                  </code>{" "}
                  package
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <Connect />
          <SignMessage />
          <SendTx />
          <SwitchChain />
        </section>
      </div>
    </WagmiConfig>
  );
}
export { ixConnector };
