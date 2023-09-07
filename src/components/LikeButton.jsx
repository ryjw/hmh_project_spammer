import { API } from "../API";

export default function LikeButton({ message, fetchMessages }) {
  async function handleLike() {
    await fetch(`${API}/messages/${message.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: message.likes + 1 }),
    });
    fetchMessages();
  }
  return (
    <button onClick={handleLike} className="button">
      👍 {message.likes}
    </button>
  );
}
