import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (classes
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          
        </Toolbar>
      </AppBar>
    </div>);
}
