import React from "react";
import "./input.css";

function Input(props) {
  if (props.activity) {
    if (props.type === 0) {
      return (
        <label>
          <input
            className="input"
            type="text"
            value={props.value}
            onChange={props.onChange}
            autoFocus={true}
          />
        </label>
      );
    } else {
      return (
        <select
          className="input"
          onChange={props.onSelect}
          defaultValue="default"
        >
          <option key="disabled" disabled value="default"></option>
          {props.list.map((item) => (
            <option key={item.id} className="input" value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      );
    }
  } else {
    return null;
  }
}

export default Input;
