import React from "react";
import { CssBaseline } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Fonts from "./components/Fonts";
import InsLanding from "./pages/insurance/InsLanding";
import HomeLanding from "./pages/home/HomeLanding";
import FinLanding from "./pages/finance/FinLanding";
function App() {
  return (
    <Router>
      <CssBaseline />
      <Fonts />
      <Background />
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomeLanding} />
        <Route path="/insurance" component={InsLanding} />
        <Route path="/finance" component={FinLanding} />
        {/* Redirect all 404 to Home */}
        <Redirect to="/insurance" />
      </Switch>
    </Router>
  );
}

export default App;
