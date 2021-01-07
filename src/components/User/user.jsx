import React from "react";
import "./user.css";
import Avatar from "./user-avatar.png";
import Arrow from "./arrow-down.svg";

function User(props) {
  if (props.active) {
    return (
      <>
        <div className="user-menu" onClick={props.onClick}>
          <img className="user-menu__avatar" src={Avatar} alt="" />
          <img className="user-menu__arrow" src={Arrow} alt="" />

          <div className="user-menu__triangle"></div>
          <div className="user-menu__content">
            <li className="user-menu__link">My account</li>
            <li className="user-menu__link">My tasks</li>
            <li className="user-menu__link">Log out</li>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="user-menu" onClick={props.onClick}>
        <img className="user-menu__avatar" src={Avatar} alt="" />
        <img src={Arrow} alt="" />
      </div>
    );
  }
}

export default User;
