import React from "react";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  insLanding: {},
}));

function InsLanding() {
  const classes = useStyles();
  return <Header />;
}

export default InsLanding;
