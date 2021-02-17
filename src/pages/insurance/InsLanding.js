import React from "react";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  insLanding: {
    marginTop: 0,
  },
}));

function InsLanding() {
  const classes = useStyles();
  return (
    <div className={classes.insLanding}>
      <Background />
      <Navbar />
      <div className="container d-flex">
        <Header />
      </div>
    </div>
  );
}

export default InsLanding;
