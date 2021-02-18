import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ins_bg from "../static/images/ins_bg.jpg";

const useStyles = makeStyles((theme) => ({
  bgImg: {
    // backgroundImage: `url(${ins_bg})`,
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    zIndex: -1,
    opacity: 1,
    minHeight: "100%",
    minWidth: "100%",
  },
}));

export default function Background(props) {
  const classes = useStyles();
  return (
    <div className={classes.bgImg} style={{ backgroundImage: props.url }}></div>
  );
}
