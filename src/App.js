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
import { Routes } from "./components/constants/Routes";
import Fonts from "./components/Fonts";

function App() {
  return (
    <Router>
      <CssBaseline>
        <Fonts />
        <Background />
        <Navbar />
        <Switch>
          <Route exact path={Routes.Home} component={InsLanding} />
          {/* Redirect all 404 to Home */}
          <Redirect to={Routes.InsLanding} />
        </Switch>
      </CssBaseline>
    </Router>
  );
}

export default App;
