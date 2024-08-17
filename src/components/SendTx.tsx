import { parseEther } from "viem";
import { useAccount, useSendTransaction } from "wagmi";

export function SendTx() {
  const { data, isSuccess, sendTransaction, status } = useSendTransaction();
  const { connector: activeConnector, address } = useAccount();

  return (
    <div className="field my-5">
      <label className="label"> Send Transaction</label>
      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={() =>
              sendTransaction({
                to: "0x044d87d48EBe874749BcBA82111955aA934CF2d1",
                value: parseEther("0.01"),
              })
            }
          >
            Send
          </button>
        </div>

        {activeConnector && (
          <div className="control">
            <button
              className="button is-link"
              onClick={async () => {
                const provider = await activeConnector.getProvider();

                // sned transaction payload to provider
                (provider as any)?.request({
                  method: "eth_sendTransaction",
                  params: [
                    {
                      from: address,
                      to: "0x0c54FcCd2e384b4BB6f2E405Bf5Cbc15a017AaFb",
                      value: "0x0",
                    },
                  ],
                });
              }}
            >
              provider request
            </button>
          </div>
        )}
      </div>
      {status === "pending" && <code>Check Wallet</code>}
      {isSuccess && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}
