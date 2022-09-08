import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import GroupCreation from "./components/GroupCreation";
import NewItemListingPage from "./components/NewItemListingPage";
import WishlistedItemsPage from "./components/WishlistedItemsPage";
import MyGroupsPage from "./components/MyGroupsPage";
import GroupPage from "./components/GroupPage";
import SellingPage from "./components/SellingPage";
import LoginPage from "./components/LoginPage";
import ViewItemPage from "./components/ViewItemPage";
import HomePage from "./components/HomePage";
import InspectGroupDetailPage from "./components/InspectGroupDetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/group-creation">
          <GroupCreation {...groupCreationData} />
        </Route>
        <Route path="/new-item-listing-page">
          <NewItemListingPage {...newItemListingPageData} />
        </Route>
        <Route path="/wishlisted-items-page">
          <WishlistedItemsPage {...wishlistedItemsPageData} />
        </Route>
        <Route path="/my-groups-page">
          <MyGroupsPage {...myGroupsPageData} />
        </Route>
        <Route path="/group-page">
          <GroupPage {...groupPageData} />
        </Route>
        <Route path="/selling-page">
          <SellingPage {...sellingPageData} />
        </Route>
        <Route path="/login-page">
          <LoginPage title="Sign In" signInAndStartSc="Sign in and start scrolling through <Logo Here> !" />
        </Route>
        <Route path="/view-item-page">
          <ViewItemPage {...viewItemPageData} />
        </Route>
        <Route path="/:path(|home-page)">
          <HomePage {...homePageData} />
        </Route>
        <Route path="/inspect-group-detail-page">
          <InspectGroupDetailPage {...inspectGroupDetailPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const groupPrivacy1Data = {
    anyoneCanJoinThisGroup: "Anyone can join this group.",
    onlyPeopleGivenAc: "Only people given access can join this group.",
};

const groupCreationData = {
    shop1: "SHOP",
    sell1: "SELL",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
    andStartListingProductsRightaway: "and start listing products rightaway!",
    createAGroupNow: "Create a Group now,",
    line3: "/img/line-3@1x.png",
    x2174913Groups: "1234, 5678 groups online",
    createGroup: "Create Group",
    line4: "/img/line-3@1x.png",
    groupName: "Group Name:",
    groupDescription: "Group Description:",
    groupPrivacy: "Group Privacy:",
    groupPrivacyProps: groupPrivacy1Data,
};

const groupPrivacy2Data = {
    anyoneCanJoinThisGroup: "Everyone can see this item.",
    onlyPeopleGivenAc: "Only people with the group can see this item.",
    className: "group-privacy-2",
};

const imageAdd3Data = {
    className: "image-add-2",
};

const newItemListingPageData = {
    shop1: "SHOP",
    sell1: "SELL",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
    andStartSellingProductsRightaway: "and start selling products rightaway!",
    listAnItem: "List an item,",
    line3: "/img/line-3@1x.png",
    x2174913Groups: "1234, 5678 items sold in the last 24 hours",
    publishItem: "Publish Item",
    line4: "/img/line-3@1x.png",
    itemName: "Item Name:",
    price: "Price:",
    itemDescription: "Item Description:",
    selectOne: "Select One...",
    polygon41: "/img/polygon-4@2x.png",
    catergory: "Catergory:",
    itemPrivacy: "Item Privacy:",
    selectOneIfApplicable: "Select one if applicable...",
    polygon42: "/img/polygon-4@2x.png",
    groupSelect: "Group Select:",
    groupPrivacyProps: groupPrivacy2Data,
    imageAddProps: imageAdd3Data,
};

const middleBar1Data = {
    wishlistedItems: "Wishlisted Items",
    x2174913Listings: "2174,913 listings",
};

const wishlistMarkerData = {
    iconStar1: "/img/star-1-2@2x.png",
    iconStar2: "/img/star-1-2@2x.png",
    iconStar3: "/img/star-1-2@2x.png",
};

const middleArea1Data = {
    myWishlist: "My Wishlist:",
};

const wishlistedItemsPageData = {
    shop1: "SHOP",
    sell1: "SELL",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
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
    middleBarProps: middleBar1Data,
    wishlistMarkerProps: wishlistMarkerData,
    middleAreaProps: middleArea1Data,
};

const middleBar2Data = {
    wishlistedItems: "Groups",
    x2174913Listings: "1234, 5678 groups",
    className: "middle-bar-3",
};

const middleArea21Data = {
    myGroups: "My Groups:",
    joinGroup1: "Members List",
    joinGroup2: "Members List",
    joinGroup3: "Members List",
};

const myGroupsPageData = {
    shop1: "SHOP",
    sell1: "SELL",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
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
    middleBarProps: middleBar2Data,
    middleArea2Props: middleArea21Data,
};

const middleBar3Data = {
    wishlistedItems: "Groups",
    x2174913Listings: "1234, 5678 groups",
    className: "middle-bar-4",
};

const groupPageData = {
    shop1: "SHOP",
    sell1: "SELL",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
    suggestedGroups: "Suggested Groups:",
    rectangle6: "/img/rectangle-6-4@2x.png",
    joinGroup1: "Join Group",
    spanText1: <React.Fragment>Marketplace Sellers<br /></React.Fragment>,
    spanText2: "31K members",
    rectangle4: "/img/rectangle-4-4@2x.png",
    joinGroup2: "Join Group",
    spanText3: <React.Fragment>Marketplace Sellers<br /></React.Fragment>,
    spanText4: "31K members",
    rectangle5: "/img/rectangle-5-4@2x.png",
    joinGroup3: "Join Group",
    spanText5: <React.Fragment>Marketplace Sellers<br /></React.Fragment>,
    spanText6: "31K members",
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
    middleBarProps: middleBar3Data,
};

const middleBar4Data = {
    wishlistedItems: "Sell",
    x2174913Listings: "2174,913 listings",
    className: "middle-bar-5",
};

const middleArea3Data = {
    myWishlist: "My Listings:",
};

const sellingPageData = {
    shop1: "SHOP",
    sell1: "SELL",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
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
    middleBarProps: middleBar4Data,
    middleAreaProps: middleArea3Data,
};

const viewItemPageData = {
    shop1: "SHOP",
    sell1: "SELL",
    imageAdd: "/img/rectangle-16@2x.png",
    expandImages: "/img/expand-images@2x.png",
    rectangle161: "/img/rectangle-16-1@2x.png",
    rectangle162: "/img/rectangle-16-2@2x.png",
    rectangle163: "/img/rectangle-16-3@2x.png",
    name: <React.Fragment>Tiffany Blue Double Heart Tag Pendant <br />in Silver</React.Fragment>,
    orignalNecklaceWit: "Orignal necklace with reciepts and proof of purchase. Bought as a gift for my girlfriend but we broke up.",
    price: "$350",
    place1: "PURCHASE",
    contactSeller: "CONTACT SELLER",
    line5: "/img/line-5@1x.png",
    line6: "/img/line-5@1x.png",
    line1: "/img/line-1@1x.png",
    place2: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
    sellerIamaniceguy: "Seller: IAmANiceGuy",
};

const middleBar5Data = {
    wishlistedItems: "Home",
    x2174913Listings: "2174,913 listings",
    className: "middle-bar-6",
};

const homePageData = {
    shop1: "SHOP",
    sell1: "SELL",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    line2: "/img/line-1@1x.png",
    todaysListings: "Today’s Listings:",
    spanText1: <React.Fragment>$15.95<br /></React.Fragment>,
    spanText2: "Sanrio Kurumi Plush",
    iconStar: "/img/star-1@2x.png",
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
    middleBarProps: middleBar5Data,
};

const middleArea22Data = {
    myGroups: "Suggested Groups:",
    joinGroup1: "Join Group",
    joinGroup2: "Join Group",
    joinGroup3: "Join Group",
    className: "middle-area-3",
};

const middleBar32Data = {
    wishlistedItems: "Groups",
    x2174913Listings: "1234, 5678 groups",
};

const inspectGroupDetailPageData = {
    logoHere: "Logo Here",
    search: "SEARCH",
    sell1: "SELL",
    shop1: "SHOP",
    lizwhales: "LIZWHALES",
    logOut: "LOG OUT",
    line1: "/img/line-1@1x.png",
    place: "HOME",
    shop2: "SHOP",
    sell2: "SELL",
    groups: "GROUPS",
    wishlist: "WISHLIST",
    polygon1: "/img/polygon-1@2x.png",
    browseByCategory: "BROWSE BY CATEGORY",
    line2: "/img/line-1@1x.png",
    createNewGroup: "+ Create New Group",
    searchHere: "Search here",
    ellipse1: "/img/ellipse-1@2x.png",
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
    rectangle6: "/img/rectangle-6-4@2x.png",
    spanText1: <React.Fragment>Marketplace Sellers<br /></React.Fragment>,
    spanText2: "31K members",
    joinGroup1: "Members List",
    ownerYenfug: "Owner: YenFug",
    marketplaceSellers: "Marketplace Sellers",
    joinGroup2: "Join Group",
    line7: "/img/line-7@1x.png",
    ellipse4: "/img/ellipse-4@2x.png",
    filter: "Filter",
    middleArea2Props: middleArea22Data,
    middleBar3Props: middleBar32Data,
};

