import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import app from "./components/App";
import login from "./components/Login";
import signup from "./components/Signup";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={app}></Route>
        <Route exact path="/login" component={login}></Route>
        <Route exact path="/signup" component={signup}></Route>
      </Switch>
    </>
  );
}

export default App;
