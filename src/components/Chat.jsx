import React, { useState, useEffect } from "react";

import queryString from "query-string";
import io from "socket.io-client";

import Header from "./Header";
import Input from "./Input";
import Messages from "./Messages";

var socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ENDPOINT = "https://react-chaty.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("admit", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  function sendMessage(event) {
    event.preventDefault();

    console.log("Inside sendMessage");

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }

  return (
    <div className="chat-container">
      <Header room={room} />
      <br />
      <Messages messages={messages} name={name} />
      <br />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default Chat;
