import app from "firebase/app";
import "firebase/database";

class Firebase {
  config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  constructor() {
    app.initializeApp(this.config);
    this.db = app.database();
  }

  addTask(task) {
    this.db.ref("tasks").push({
      task,
    });
  }

  listen(callback) {
    const listener = db.ref("tasks/");
    listener.on("value", callback);
    return listener;
  }

  editTask(id, task) {
    this.db.ref(`tasks/${id}/`).set({ task });
  }

  deleteTask(id) {
    this.db.ref(`tasks/${id}/`).set({});
  }
}

export default Firebase;
