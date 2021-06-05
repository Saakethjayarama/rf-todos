import React, { useEffect, useState } from "react";
import Todo from "../Todo";
import "./Todos.css";
import { listen } from "../../Firebase";

function Todos() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const listener = listen((snapshot) => {
      const values = snapshot.val();

      const docs = [];
      if (values)
        for (const [key, value] of Object.entries(values)) {
          docs.push({ id: key, ...value });
        }

      setTasks(docs);
    });
    return () => {
      listener.off();
    };
  }, []);

  return (
    <div className="Todos">
      {tasks.map((task, index) => {
        return (
          <Todo key={index} task={task.task} id={task.id} done={task.done} />
        );
      })}
    </div>
  );
}

export default Todos;
