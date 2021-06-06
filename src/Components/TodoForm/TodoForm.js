import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { addTask } from "../../Firebase";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => {
  return {
    form: {
      marginBottom: theme.spacing(5),
    },
    tb: {
      width: theme.spacing(35),

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
    if (task == "") return;
    addTask(task, () => {
      setTask("");
      setOpen(true);
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.form}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Added!"
      />
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
          onClick={handleSubmit}
        >
          ADD
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
