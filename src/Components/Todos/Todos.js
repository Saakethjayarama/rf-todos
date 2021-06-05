import React from "react";
import Todo from "../Todo";
import "./Todos.css";

function Todos() {
  return (
    <div className="Todos">
      {[1, 2, 3, 4].map((val, index) => {
        return <Todo key={index} value={val} />;
      })}
    </div>
  );
}

export default Todos;
