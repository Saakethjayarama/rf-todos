import React, { useState } from "react";
import "./Todo.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles } from "@material-ui/core";
import { deleteTask, taskComplete } from "../../Firebase";
import Modal from "../../common/Modal";

const useStyles = makeStyles((theme) => ({
  actionBtns: {
    marginLeft: theme.spacing(2),
  },
  editBtn: {
    "&:hover": {
      color: "rgb(209, 209, 40)",
    },
  },
  deleteBtn: {
    "&:hover": {
      color: "red",
    },
  },
  striked: {
    textDecoration: "line-through",
  },
}));

function Todo({ id, task, done }) {
  const classes = useStyles();

  const handleDelete = () => {
    deleteTask(id);
  };

  const [show, setShow] = useState(false);
  const handleEdit = () => {
    setShow(true);
  };

  const handleDone = () => {
    taskComplete(id, task, !done);
  };

  return (
    <div className="Todo">
      <Modal
        show={show}
        handleClose={() => setShow(false)}
        task={task}
        id={id}
        done={done}
      />
      <div className="Todo__container">
        <div
          className={
            done
              ? `Todo__container__task ${classes.striked}`
              : `Todo__container__task`
          }
        >
          {task}
        </div>
        <div className="Todo__container__action">
          {done ? (
            <CheckCircleIcon onClick={handleDone} />
          ) : (
            <CheckCircleOutlineIcon onClick={handleDone} />
          )}

          <EditIcon
            onClick={handleEdit}
            className={`${classes.actionBtns} ${classes.editBtn}`}
          />
          <DeleteForeverIcon
            onClick={handleDelete}
            className={`${classes.actionBtns} ${classes.deleteBtn}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
