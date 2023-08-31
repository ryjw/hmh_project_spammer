import { useState } from "react";
import { API } from "../API";

export default function PostMessage({ fetchMessages }) {
  // state handling user input
  const [input, setInput] = useState("");

  // function handling the submit
  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${API}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: input,
      }),
    });
    e.target.text.value = "";
    fetchMessages();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="submit-form">
        <label>
          Your message:
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            name="text"
          />
        </label>
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
}
