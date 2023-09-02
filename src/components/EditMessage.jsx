import { useState } from "react";
import { API } from "../API";

export default function EditMessage({ message, setIsEditing, fetchMessages }) {
  // our state which we set when we type, starts out as existing message text
  const [input, setInput] = useState(message.text);
  // here we handle submit with a put request, as set out in the API doc
  // prevent default stops the page reloading on submit
  async function handleSubmitEdit(e) {
    e.preventDefault();
    await fetch(`${API}/message/${message.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input }),
    });
    setIsEditing(false);
    fetchMessages();
  }
  function handleCancelEdit() {
    setIsEditing(false);
  }

  return (
    <form className="button-container" onSubmit={handleSubmitEdit}>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        defaultValue={message.text}
      />
      <button>submit</button>
      <button type="button" onClick={handleCancelEdit}>
        cancel
      </button>
    </form>
  );
}
