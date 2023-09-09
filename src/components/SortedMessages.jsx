import { useEffect, useState } from "react";

import Message from "./Message";

export default function SortedMessages({ messages, fetchMessages }) {
  const [sortedMessages, setSortedMessages] = useState([]);
  function sortMessages() {
    const newMessages = messages.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
    setSortedMessages(newMessages);
  }
  useEffect(() => {
    sortMessages();
  }, [messages]);

  return (
    <div>
      {sortedMessages.map((msg) => {
        return (
          !msg.parentId && (
            <Message
              key={msg.id}
              message={msg}
              sortedMessages={sortedMessages}
              fetchMessages={fetchMessages}
            />
          )
        );
      })}
    </div>
  );
}
