import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 0,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
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
  return <h1 className={classes.header}>This is where</h1>;
}
