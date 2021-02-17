import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import logo from "../static/images/logo.png";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    height: "10%",
  },
  logo: {},
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <img className={classes.logo} src={logo}></img>
        </Toolbar>
      </AppBar>
    </div>
  );
}
