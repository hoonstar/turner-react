import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import bg from "../../static/images/ins_bg.jpg";

const details = {
  text: "Welcome to Turner Insurance",
  color: "white",
  url: `url(${bg})`,
  navColor: "white",
};
function InsLanding() {
  return (
    <>
      <Background url={details.url} />
      <Navbar navColor={details.navColor} />
      <Header text={details.text} color={details.color} />
    </>
  );
}

export default InsLanding;
