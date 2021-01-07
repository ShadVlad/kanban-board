import React from "react";
import "./footer.css";
import logo from "./logo.svg";

function f(tasks) {
  return Array.from(tasks);
}

function Count(tasks, step) {
  let item;
  for (let [key, value] of Object.entries(tasks)) {
    item = value;
  }
  let counter = 0;
  if (item) {
    counter = item.filter((stage) => stage.status === step).length;
  }
  return counter;
}

function Footer(tasks) {
  console.log(tasks);
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer__counterblock">
          <div>Active tasks: {Count(tasks, 0)}</div>
          <div>Finished tasks: {Count(tasks, 3)}</div>
        </div>

        <div className="footer__copyright">
          Kanban board by SVlad, 2020
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </section>
  );
}
export default Footer;
