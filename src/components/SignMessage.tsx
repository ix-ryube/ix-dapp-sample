import * as React from "react";
import { useSignMessage } from "@intellax/ix-ethereum-connector/wagmi";
import { recoverMessageAddress } from "@intellax/ix-ethereum-connector/viem";

export function SignMessage() {
  const [recoveredAddress, setRecoveredAddress] = React.useState("");
  const { data, error, isLoading, signMessage, variables } = useSignMessage();

  React.useEffect(() => {
    (async () => {
      if (variables?.message && data) {
        const recovered = await recoverMessageAddress({
          message: variables?.message,
          signature: data,
        });
        setRecoveredAddress(recovered);
      }
    })();
  }, [data, variables?.message]);

  return (
    <>
      <form
        className="field"
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const message = formData.get("message");
            signMessage({ message: message as string });
          } catch (error) {
            console.log("err", error);
          }
        }}
      >
        <div className="field">
          <label className="label" htmlFor="message">
            Enter a message to sign
          </label>
          <div className="control">
            <textarea
              id="message"
              name="message"
              className="textarea"
              placeholder="The quick brown fox…"
            />
          </div>
        </div>
        {data && (
          <pre>
            Recovered Address: {recoveredAddress} <br />
            Signature: {data}
          </pre>
        )}
        {error && <pre>{error.message}</pre>}
        <div className="field mt-3">
          <div className="control">
            <button className="button" disabled={isLoading}>
              {isLoading ? "Check Wallet" : "Sign Message"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
