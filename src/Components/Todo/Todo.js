import React from "react";
import "./Todo.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core";
import Firebase from "../../Firebase";

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
}));

function Todo({ id, task }) {
  const classes = useStyles();

  const fb = new Firebase();
  console.log(fb.config);

  const handleDelete = () => {
    console.log("Entered Delete");
  };

  const handleEdit = () => {
    console.log("Entered Edit");
  };

  return (
    <div className="Todo">
      <div className="Todo__container">
        <div className="Todo__container__task">This is todo</div>
        <div className="Todo__container__action">
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
