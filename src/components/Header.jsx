import React from "react";

import onlineIcon from "../Img/onlineIcon.png";
import closeIcon from "../Img/closeIcon.png";

import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <a href="/">
        <img className="close-icon" src={closeIcon} alt="status" />
      </a>
      <h3 className="room-name">Room info$: {props.room}</h3>
      <br />
      <h3 className="status">STATUS: </h3>
      <img className="online-icon" src={onlineIcon} alt="status" />
    </div>
  );
}

export default Header;
