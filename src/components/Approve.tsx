import { useReadContract } from "wagmi";

import erc20 from "../contract/abi/erc20";
import {
  readContract,
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { ixConnector } from "../ixConnector";
import { formatEther, maxUint256, parseEther } from "viem";
import { useState } from "react";

const CONTRACT: { [key: string]: `0x${string}` } = {
  POOL: "0x20eB03694DD9286f921Bf004f25c91F00eC68ED2",
  EXCHANGE_V1: "0x7CD138b443c011800812f8296f86040293c8954E",
  TOKEN: "0xD4660eE99370aBe115462295F7DC7b1d7574cF6f",
};
export function Approve({ address }: { address: `0x${string}` }) {
  const [loading, setLoading] = useState(false);
  const { data: allowanceData, refetch } = useReadContract({
    abi: erc20,
    address: CONTRACT.TOKEN,
    functionName: "allowance",
    args: [address, CONTRACT.EXCHANGE_V1],
  });

  return (
    <>
      <div className="content">
        <h2>Approve</h2>

        {address && (
          <>
            {allowanceData?.toString() && (
              <p>현재 allowance : {formatEther(allowanceData).toString()}</p>
            )}

            <form
              className="field"
              onSubmit={async (event) => {
                try {
                  event.preventDefault();
                  setLoading(true);
                  // 임의의 토큰 값 1000
                  // allowance 가 amount 보다 작으면 approve 실행

                  const formData = new FormData(event.currentTarget);

                  // https://viem.sh/docs/utilities/parseEther
                  // token spec에 따라 다르지만 일반적으로 18자리 소수점을 가진다. (USDC, USDT, token은 6자리 사용하니 주의 필요)
                  const tokenAmount = BigInt(
                    parseEther((formData.get("token-amount") as string) || "0")
                  );
                  const owner = formData.get("owner") as `0x${string}`;
                  const spender = formData.get("spender") as `0x${string}`;

                  if (!owner || !spender) {
                    throw new Error("owner or spender is required");
                  }

                  const allowance = await readContract(
                    ixConnector.wagmiConfig,
                    {
                      abi: erc20,
                      address: CONTRACT.TOKEN,
                      functionName: "allowance",
                      args: [owner, spender],
                    }
                  );

                  console.log("approve submit", {
                    amout: tokenAmount.toString(),
                    allowance: allowance.toString(),
                    owner,
                    spender,
                  });

                  if (tokenAmount > allowance) {
                    console.log("approve");

                    // amout 만큼 approve
                    const approveTxHash = await writeContract(
                      ixConnector.wagmiConfig,
                      {
                        abi: erc20,
                        address: CONTRACT.TOKEN,
                        functionName: "approve",
                        args: [spender, maxUint256],
                      }
                    );

                    // transaction 완료 대기
                    // recipt을 기다린다면 대부분 처리 됨
                    const approveRecipt = await waitForTransactionReceipt(
                      ixConnector.wagmiConfig,
                      {
                        hash: approveTxHash,
                      }
                    );

                    console.log("approve done", {
                      approveTxHash,
                      approveRecipt,
                    });
                  }

                  alert("TX 실행");

                  // signMessage({ message: message as string });
                } catch (error) {
                  console.log("err", error);
                } finally {
                  refetch();
                  setLoading(false);
                }
              }}
            >
              <div className="field">
                <label className="label" htmlFor="token-amount">
                  Token Amount
                </label>
                <div className="control">
                  <input
                    type="number"
                    id="token-amount"
                    name="token-amount"
                    defaultValue={0.1}
                    min="0"
                    step="0.000000000000000001"
                    className="input"
                    placeholder="input token-amount"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="owner">
                  owner address
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="owner"
                    name="owner"
                    defaultValue={address}
                    className="input"
                    pattern="0x[0-9a-fA-F]{40}"
                    placeholder="input owner address"
                    title="Please enter a 40-character hexadecimal address starting with 0x."
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="spender">
                  spender address
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="spender"
                    name="spender"
                    className="input"
                    pattern="0x[0-9a-fA-F]{40}"
                    defaultValue={CONTRACT.EXCHANGE_V1}
                    placeholder="input spender address"
                    title="Please enter a 40-character hexadecimal address starting with 0x."
                  />
                </div>
              </div>

              <div className="field mt-3">
                <div className="control">
                  <button
                    className={
                      loading
                        ? "button is-primary is-loading"
                        : "button is-primary"
                    }
                    disabled={loading}
                  >
                    {"Sign Message"}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}
