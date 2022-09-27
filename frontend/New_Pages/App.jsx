import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import NewListings from "./components/NewListingPage";
import SellPage from "./components/SellPage";
import WishlistPage from "./components/WishlistPage";
import ProductPage from "./components/ProductPage";
import GroupPage from "./components/GroupPage";
import CreateGroupPage from "./components/CreateGroupPage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home-page)">
        <HomePage/>
        </Route>
        <Route path="/login-page">
          <LoginPage/>
        </Route>
        <Route path="/sign-up-page">
          <SignUp/> 
        </Route>
        <Route path="/new-listings-page">
          <NewListings/>
        </Route>
        <Route path="/sell-page">
          <SellPage/>
        </Route>
        <Route path="/wishlist-page">
          <WishlistPage/>
        </Route>
        <Route path="/product-page">
          <ProductPage/>
        </Route>
        <Route path="/group-page">
          <GroupPage/>
        </Route>
        <Route path="/create-group-page">
          <CreateGroupPage/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

