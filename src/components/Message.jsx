import React from "react";

import "./Message.css";

function Message({ message: { user, text }, name }) {
  var isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase().concat("$");

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container">
      <h4 className="trimmed-name">{trimmedName}:</h4>
      <h4 className="text">{text}</h4>
    </div>
  ) : (
    <div className="message-container">
      <h4 className="trimmed-name">{user}:</h4>
      <h4 className="text">{text}</h4>
    </div>
  );
}

export default Message;
