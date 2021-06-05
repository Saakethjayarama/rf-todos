import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { addTask } from "../../Firebase";

const useStyles = makeStyles((theme) => {
  return {
    form: {
      marginBottom: theme.spacing(5),
    },
    tb: {
      width: theme.spacing(37),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(45),
      },
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(75),
      },
    },
    btn: {
      height: theme.spacing(7),
      marginLeft: theme.spacing(2),
    },
  };
});

function TodoForm() {
  const classes = useStyles();

  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task, () => {
      setTask("");
    });
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Todo"
          variant="outlined"
          className={classes.tb}
          onChange={(event) => setTask(event.target.value)}
          value={task}
          required
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.btn}
        >
          ADD
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
