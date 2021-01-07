//import logo from "./logo.svg";
import { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Board from "./components/Board/board";
import "./App.css";

function App() {
  const localStorageData = localStorage.getItem("tasks");
  const [tasks, setData] = useState(
    localStorageData ? JSON.parse(localStorageData) : ""
  );
  const updateData = (newData) => {
    localStorage.setItem("tasks", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="App">
      <Header />
      <Board />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
