import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message.jsx";

import "./Messages.css";

function Messages({ messages, name }) {
  return (
    <ScrollToBottom>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;
