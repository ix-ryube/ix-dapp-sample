import { parseEther } from "@intellax/ix-ethereum-connector/viem";
import { useSendTransaction } from "@intellax/ix-ethereum-connector/wagmi";

export function SendTx() {
  const { data, isSuccess, sendTransaction, status } = useSendTransaction();
  return (
    <div className="field my-5">
      <label className="label"> Send Transaction</label>
      <div className="control">
        <button
          className="button is-link"
          onClick={() =>
            sendTransaction({
              to: "0x50b1C76Ca3C23c90B5682A10723f762bE79001c5",
              value: parseEther("0.01"),
            })
          }
        >
          Send
        </button>
      </div>
      {status === "pending" && <code>Check Wallet</code>}
      {isSuccess && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}
