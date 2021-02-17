import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import logo from "../static/images/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    height: "10%",
    position: "static",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    padding: "0.5rem calc((100vw-1000px)/2)",
  },
  logo: {
    height: "3rem",
    justifyContent: "left",
  },
  list: {
    display: "flex",
    alignContent: "center",
  },
  link: {
    marginRight: "2rem",
    textDecoration: "none",
    color: "white",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "large",
    fontWeight: "800",
    listStyleType: "none",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Link to="/home">
        <img className={classes.logo} src={logo} alt=""></img>
      </Link>
      <ul className={classes.list}>
        <Link className={classes.link} to="/insurance">
          <li>Insurance</li>
        </Link>
        <Link className={classes.link} to="/finance">
          <li>Finance</li>
        </Link>
      </ul>
    </AppBar>
  );
}
