import { db } from "./Firebase";

const addTask = (task, callback) => {
  db.ref("tasks")
    .push({
      task,
    })
    .then(() => callback());
};

const listen = (callback) => {
  const listener = db.ref("tasks/");
  listener.on("value", callback);
  return listener;
};

const editTask = (id, task) => {
  db.ref(`tasks/${id}/`).set({ task });
};

const deleteTask = (id) => {
  db.ref(`tasks/${id}/`).set({});
};

export { addTask, listen, editTask, deleteTask };
