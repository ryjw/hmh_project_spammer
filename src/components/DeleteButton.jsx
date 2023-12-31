import { API } from "../API";

export default function DeleteButton({ message, fetchMessages }) {
  async function handleDelete() {
    await fetch(`${API}/messages/${message.id}`, {
      method: "DELETE",
    });
    fetchMessages();
  }
  return (
    <button onClick={handleDelete} className="button">
      🗑️
    </button>
  );
}
