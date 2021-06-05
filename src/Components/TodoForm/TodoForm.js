import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

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

  return (
    <div className={classes.form}>
      <TextField
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        className={classes.tb}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.btn}
      >
        ADD
      </Button>
    </div>
  );
}

export default TodoForm;
