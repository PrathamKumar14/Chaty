import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="container">
      <h2 className="heading">
        HACKING GROUP! <span className="emoji">&#9760;</span>
      </h2>
      <form action="">
        <label>Enter Name/:</label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          className="input"
          type="text"
        />
        <br />
        <label>Enter Group/:</label>
        <input
          onChange={(event) => {
            setRoom(event.target.value);
          }}
          className="input"
          type="text"
        />
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit"></button>
        </Link>
      </form>
      <div className="footer">
        <h4 class="footer-note">Contact Developer:</h4>
        <a href="https://twitter.com/Prathkum">
          <img src="https://img.icons8.com/fluent/24/000000/twitter.png" />
        </a>
      </div>
    </div>
  );
}

export default Home;
