import React from "react";

import "./Input.css";

function Input({ message, setMessage, sendMessage }) {
  return (
    <form className="form">
      <label>Type message~</label>
      <input
        className="chat-input"
        value={message}
        type="text"
        // value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      {/* <button
        onClick={(event) => {
          sendMessage(event);
        }}
      >
        Send
      </button> */}
    </form>
  );
}

export default Input;
