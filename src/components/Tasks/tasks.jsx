import React from "react";
import "./tasks.css";

//Выводим задачи блока
function Tasks(props) {
  console.log(props);
  if (props.full) {
    return (
      <>
        {props.list.map((item) => (
          <div key={item.id} className="task-full">
            <div className="list__title">{item.title}</div>
            <p className="list__text">Created at {item.createdAt}</p>
            <p className="list__text">{item.text}</p>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {props.list.map((item) => (
          <div key={item.id} className="task">
            {item.title}
          </div>
        ))}
      </>
    );
  }
}

export default Tasks;
