import { useAccount } from "wagmi";
import { Approve } from "./components/Approve";
import { Connect } from "./components/Connect";
import { SendTx } from "./components/SendTx";
import { SignMessage } from "./components/SignMessage";
import { SwitchChain } from "./components/SwitchChain";

export function App() {
  const { address } = useAccount();
  return (
    <>
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
          {!address && <p>Connect to a wallet to see more features</p>}
          {address && <Approve address={address} />}
        </section>
      </div>
    </>
  );
}
