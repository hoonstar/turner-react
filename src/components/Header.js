import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    marginTop: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
  text: {
    color: "white",
    fontFamily: "Mulish, sans-serif",
    fontSize: "4vw",
    fontWeight: "700",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.text} style={{ color: props.color }}>
        {props.text}{" "}
      </h1>
    </div>
  );
}
