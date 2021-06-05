import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { editTask } from "../../Firebase";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    tb: {
      width: theme.spacing(37),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(45),
      },
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(55),
      },
    },
  };
});

export default function TaskModal({ show, handleClose, task, id, done }) {
  const [updatedTask, setTask] = useState("");
  const classes = useStyles();

  useEffect(() => {
    setTask(task);
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(id, updatedTask, done, handleClose());
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <TextField
              id="outlined-basic"
              label="Todo"
              variant="outlined"
              className={classes.tb}
              onChange={(event) => setTask(event.target.value)}
              value={updatedTask}
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
