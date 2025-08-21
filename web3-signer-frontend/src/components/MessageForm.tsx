import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";

const MessageForm = () => {
  const { primaryWallet } = useDynamicContext();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const signAndSend = async () => {
  if (!primaryWallet) {
    setStatus("No wallet connected.");
    return;
  }

  try {
    setStatus("Signing message...");

    const signature = await primaryWallet.signMessage(message);

    await fetch("http://localhost:4000/verify-signature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, signature }),
    });

    setStatus("✅ Message signed & sent successfully!");
  } catch (err) {
    console.error("Signing failed:", err);
    setStatus("❌ Signing failed. Check console for details.");
  }
};


  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Send a Signed Message</h2>
      <textarea
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <br />
      <button onClick={signAndSend} disabled={!primaryWallet || !message}>
        Sign & Send
      </button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default MessageForm;
