import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import logo from "../static/images/logo.png";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
  logo: {
    src: `url(${logo})`,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <img className={classes.logo} src={logo}></img>
      </AppBar>
    </div>
  );
}
