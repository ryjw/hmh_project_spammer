import { useEffect, useState } from "react";
import { API } from "./API";
import SortedMessages from "./components/SortedMessages";
import PostMessage from "./components/PostMessage";

function App() {
  const [messages, setMessages] = useState([]);

  // function to fetch the array of message objects using the API
  async function fetchMessages() {
    const res = await fetch(`${API}/messages`);
    const data = await res.json();
    setMessages(data.messages);
  }

  // useEffect to fill our message state one time (initially)
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <h1>Message Spammer</h1>
      <PostMessage fetchMessages={fetchMessages} />
      <SortedMessages messages={messages} fetchMessages={fetchMessages} />
    </>
  );
}

export default App;
