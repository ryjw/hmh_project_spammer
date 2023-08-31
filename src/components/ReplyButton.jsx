import { useState } from "react";
import { API } from "../API";

export default function ReplyButton({ message, fetchMessages }) {
  const [isReplying, setIsReplying] = useState(false);
  const [input, setInput] = useState("");

  async function handleReplySubmit(e) {
    e.preventDefault();
    await fetch(`${API}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: input,
        parentId: message.id,
      }),
    });
    fetchMessages();
  }

  return isReplying ? (
    <div>
      <form onSubmit={(e) => handleReplySubmit(e)} style={{ display: "block" }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="type your reply..."
        />
        <button>submit</button>
        <button type="button" onClick={() => setIsReplying(false)}>
          cancel
        </button>
      </form>
    </div>
  ) : (
    <button onClick={() => setIsReplying(true)}>↩️</button>
  );
}
