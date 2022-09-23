import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|login-page)">
        <LoginPage/>
        </Route>
        <Route path="home-page">
          <HomePage/>
        </Route>
        <Route path="sign-up-page">
          <SignUp/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

