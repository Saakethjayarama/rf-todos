import { db } from "./Firebase";

const addTask = (task, callback = () => {}) => {
  db.ref("tasks")
    .push({
      task,
      done: false,
    })
    .then(() => callback());
};

const listen = (callback) => {
  const listener = db.ref("tasks/");
  listener.on("value", callback);
  return listener;
};

const editTask = (id, task, done, callback = () => {}) => {
  db.ref(`tasks/${id}/`)
    .set({ task })
    .then(() => callback());
};

const taskComplete = (id, task, status, callback = () => {}) => {
  db.ref(`tasks/${id}/`)
    .set({ task, done: status })
    .then(() => callback());
};

const deleteTask = (id, callback = () => {}) => {
  db.ref(`tasks/${id}/`)
    .set({})
    .then(() => callback());
};

export { addTask, listen, editTask, deleteTask, taskComplete };
