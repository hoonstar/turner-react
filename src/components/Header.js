import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Mulish, sans-serif",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.text}>Welcome to Turners Insurance</h1>
    </div>
  );
}
