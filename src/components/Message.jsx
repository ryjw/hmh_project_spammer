import { useState } from "react";
import DeleteButton from "./DeleteButton";
import LikeButton from "./LikeButton";
import EditMessage from "./EditMessage";
import ReplyButton from "./ReplyButton";

export default function Message({ message, fetchMessages }) {
  // state determining whether the edit box displays or just the text
  const [isEditing, setIsEditing] = useState(false);

  // if there are any children in the message, this function calls itself again
  // messy - want to shorten
  return (
    <div key={message.id} className="message-container">
      {isEditing ? (
        <EditMessage
          message={message}
          setIsEditing={setIsEditing}
          fetchMessages={fetchMessages}
        />
      ) : (
        <div className="text-container">
          <p className="message-text">{message.text}</p>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            edit
          </button>
        </div>
      )}
      <div className="button-container">
        <LikeButton message={message} fetchMessages={fetchMessages} />
        <DeleteButton message={message} fetchMessages={fetchMessages} />
        <ReplyButton message={message} fetchMessages={fetchMessages} />
      </div>
      {message.children.length > 0 && (
        <Message message={message.children[0]} fetchMessages={fetchMessages} />
      )}
    </div>
  );
}
