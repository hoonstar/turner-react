import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";

const details = {
  text: "Welcome to Turner Home",
  color: "#18A0FB",
};
export default function HomeLanding() {
  return (
    <>
      <Background />
      <Navbar />
      <Header text={details.text} color={details.color} />
    </>
  );
}
