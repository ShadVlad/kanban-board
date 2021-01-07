import React from "react";
import "./button.css";

const Button = (props) => {
  console.log(props);
  if (
    (props.type === 0 && !props.inputActivity) ||
    (props.type === 0 && props.value) ||
    (props.list.length > 0 && !props.inputActivity)
  ) {
    return (
      <button className={`btn ${props.name}`} onClick={props.onClick}>
        {props.name}
      </button>
    );
  } else {
    return (
      <button className="btn" disabled>
        {props.name}
      </button>
    );
  }
};

export default Button;
