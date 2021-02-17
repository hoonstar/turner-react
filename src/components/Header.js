import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "25%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Mulish, sans-serif",
  },
  headerText: {
    marginTop: 0,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Header() {
  const classes = useStyles();
  return <h1 className={classes.header}>Welcome to Turners Insurance</h1>;
}
