import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";

const details = {
  text: "Welcome to Turner Insurance",
  color: "white",
};
function InsLanding() {
  return (
    <>
      <Background />
      <Navbar />
      <Header text={details.text} color={details.color} />
    </>
  );
}

export default InsLanding;
