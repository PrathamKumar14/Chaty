import React, { useState, useEffect } from "react";

import queryString from "query-string";
import io, { Socket } from "socket.io-client";

var socket;

function Chat(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const data = queryString.parse(props.location.search);

    socket = io(ENDPOINT);

    setName(data.name);
    setRoom(data.room);

    socket.emit("join", { name, room });
  }, [ENDPOINT, props.location.search]);

  return <h1>Chat</h1>;
}

export default Chat;
