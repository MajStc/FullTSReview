import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Home from "./containers/home/Home";
import LoginPage from "./containers/loginPage/LoginPage";
import PrivateRoute from "./hoc/PrivateRoute";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  );
}

export default App;
