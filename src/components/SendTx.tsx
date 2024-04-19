import { parseEther } from "@intellax/ix-ethereum-connector/viem";
import {
  useAccount,
  useSendTransaction,
  useWalletClient,
} from "@intellax/ix-ethereum-connector/wagmi";

export function SendTx() {
  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: "0x50b1C76Ca3C23c90B5682A10723f762bE79001c5",
    value: parseEther("0.01"),
  });

  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  return (
    <>
      <div className="field my-5">
        <label className="label"> Send Transaction</label>
        <div className="control">
          <button className="button is-link" onClick={() => sendTransaction()}>
            Send
          </button>
        </div>
        {isLoading && <code>Check Wallet</code>}
        {isSuccess && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
      </div>
      <div className="field my-5">
        <label className="label"> Custom Transaction</label>
        <div className="control">
          <button
            className="button is-link"
            onClick={async () => {
              try {
                const txHash = await walletClient?.request({
                  method: "eth_sendTransaction",
                  params: [
                    {
                      from: address || "0x99",
                      to: "0xb1348eCf2D0B8976587ef19a8dF61B5f66D685d9",
                      data: "0x5a735856000000000000000000000000adcd9eecd0f0010ac69c761fe7786f5e590f15af000000000000000000000000ce29e2e6ee712404ffa10803bc7ff47b834929be000000000000000000000000000000000000000000000004e1003b28d9280000000000000000000000000000ce29e2e6ee712404ffa10803bc7ff47b834929be0000000000000000000000000000000000000000000000008ac7230489e8000000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b1348ecf2d0b8976587ef19a8df61b5f66d685d900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002433633139333362612d313637382d346431382d386431662d62626563646331343938373600000000000000000000000000000000000000000000000000000000",
                      chainId: 80001,
                    },
                  ],
                });

                console.log("Custom Transaction success", txHash);
              } catch (error) {
                console.log("Custom Transaction  fail", error);
              }
            }}
          >
            Send
          </button>
        </div>
        {isLoading && <code>Check Wallet</code>}
        {isSuccess && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
      </div>
    </>
  );
}
