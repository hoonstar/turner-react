import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";

const details = {
  text: "Welcome to Turner Claim",
  color: "#18A0FB",
};

export default function ClaimLanding() {
  return (
    <>
      <Background />
      <Navbar />
      <Header text={details.text} color={details.color} />
    </>
  );
}
