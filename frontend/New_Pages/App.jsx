import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import NewListings from "./components/NewListingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|login-page)">
        <HomePage/>
        </Route>
        <Route path="/home-page">
          <HomePage/>
        </Route>
        <Route path="/sign-up-page">
          <SignUp/>
        </Route>
        <Route path="/new-listings-page">
          <NewListings/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

