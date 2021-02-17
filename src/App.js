import React from "react";
import InsLanding from "./pages/insurance/InsLanding";
import { CssBaseline } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <CssBaseline>
        <Background />
        <Navbar />
        <InsLanding></InsLanding>
      </CssBaseline>
    </Router>
  );
}

export default App;
