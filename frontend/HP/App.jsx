import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home-page)">
          <HomePage {...homePageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const homePageData = {
    search: "SEARCH",
    sell1: "SELL",
    shop1: "SHOP",
    inputType1: "text",
    inputPlaceholder1: "search",
    login: "LOGIN",
    signUp: "SIGN UP",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631396ebd90b3a5e2f7621e8/img/line-1@1x.png",
    place1: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    polygon1: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631396ebd90b3a5e2f7621e8/img/polygon-1@2x.png",
    browseByCategory: "BROWSE BY CATEGORY",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631396ebd90b3a5e2f7621e8/img/line-1@1x.png",
    place2: "Home",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631396ebd90b3a5e2f7621e8/img/line-3@1x.png",
    x2174913Listings: "2174,913 listings",
    rectangle1: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631767a6d90b3a5e2f762c08/img/rectangle-1@2x.png",
    sortByDefault: "Sort By: Default",
    polygon2: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631396ebd90b3a5e2f7621e8/img/polygon-2@2x.png",
    line4: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631396ebd90b3a5e2f7621e8/img/line-3@1x.png",
    inputType2: "text",
    inputPlaceholder2: "Search here",
    iconSearch: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/63138a553913a4782d2b77aa/img/ellipse-1@2x.png",
    categories: "Categories",
    vechicles: "Vechicles",
    apparel: "Apparel",
    classified: "Classified",
    eletronics: "Eletronics",
    entertainment: "Entertainment",
    family: "Family",
    gardenOutdoor: "Garden & Outdoor",
    hobbies: "Hobbies",
    homeGoods: "Home Goods",
    homeImprovementSupplies: "Home Improvement Supplies",
    musicalInstruments: "Musical Instruments",
    officeSupplies: "Office Supplies",
    petSupplies: "Pet Supplies",
    sportingGoods: "Sporting Goods",
    toysGames: "Toys & Games",
    createNewListing: "+ Create New Listing",
    filter: "Filter",
    todaysListings: "Today’s Listings:",
    spanText1: <React.Fragment>$15.95<br /></React.Fragment>,
    spanText2: "Sanrio Kurumi Plush",
    iconStar: "https://anima-uploads.s3.amazonaws.com/projects/630dd62fa1dcc94b8a4ac70d/releases/631396ebd90b3a5e2f7621e8/img/star-1@2x.png",
};

