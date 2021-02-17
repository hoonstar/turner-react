import React from "react";
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
      <div className="container d-flex">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 center">
              <Header />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsLanding;
