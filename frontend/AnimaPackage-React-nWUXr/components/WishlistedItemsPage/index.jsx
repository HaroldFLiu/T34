import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";
import MiddleBar from "../MiddleBar";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import WishlistMarker from "../WishlistMarker";
import MiddleArea from "../MiddleArea";
import SideSearch from "../SideSearch";
import SearchButton2 from "../SearchButton2";
import "./WishlistedItemsPage.css";

function WishlistedItemsPage(props) {
  const {
    shop1,
    sell1,
    line1,
    place,
    shop2,
    sell2,
    groups,
    wishlist,
    line2,
    categories,
    vechicles,
    apparel,
    classified,
    eletronics,
    entertainment,
    family,
    gardenOutdoor,
    hobbies,
    homeGoods,
    homeImprovementSupplies,
    musicalInstruments,
    officeSupplies,
    petSupplies,
    sportingGoods,
    toysGames,
    createNewListing,
    filter,
    middleBarProps,
    wishlistMarkerProps,
    middleAreaProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="wishlisted-items-page screen" name="form10" action="form10" method="post">
        <div className="top-bar-2">
          <div className="rectangle-22-2"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group1-2">
            <div className="shop-4 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-4 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className="bar-container">
          <MiddleBar
            wishlistedItems={middleBarProps.wishlistedItems}
            x2174913Listings={middleBarProps.x2174913Listings}
          />
          <div className="divider-bar-2">
            <img className="line-1-2" src={line1} />
            <div className="flex-row-2">
              <Link to="/home-page">
                <div className="place-2 tienne-bold-black-24px">{place}</div>
              </Link>
              <div className="shop-5 tienne-bold-black-24px">{shop2}</div>
              <a href="javascript:SubmitForm('form10')">
                <div className="sell-5 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="javascript:SubmitForm('form10')">
                <div className="groups-2 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="javascript:SubmitForm('form10')">
                <div className="wishlist-2 tienne-bold-black-24px">{wishlist}</div>
              </a>
              <BROWESEBYCATE />
            </div>
            <img className="line-2-2" src={line2} />
            <SortByDropsown />
          </div>
        </div>
        <div className="overlap-group2-2">
          <WishlistMarker
            iconStar1={wishlistMarkerProps.iconStar1}
            iconStar2={wishlistMarkerProps.iconStar2}
            iconStar3={wishlistMarkerProps.iconStar3}
          />
          <MiddleArea myWishlist={middleAreaProps.myWishlist} />
          <div className="category-bar">
            <div className="search-container">
              <SideSearch />
              <SearchButton2 />
            </div>
            <div className="categories tienne-normal-black-25px">{categories}</div>
            <div className="vechicles tienne-normal-black-17px">{vechicles}</div>
            <div className="category-bar-item tienne-normal-black-17px">{apparel}</div>
            <div className="category-bar-item-1 tienne-normal-black-17px">{classified}</div>
            <div className="category-bar-item tienne-normal-black-17px">{eletronics}</div>
            <div className="category-bar-item tienne-normal-black-17px">{entertainment}</div>
            <div className="category-bar-item-1 tienne-normal-black-17px">{family}</div>
            <div className="category-bar-item-1 tienne-normal-black-17px">{gardenOutdoor}</div>
            <div className="category-bar-item tienne-normal-black-17px">{hobbies}</div>
            <div className="category-bar-item-1 tienne-normal-black-17px">{homeGoods}</div>
            <div className="home-improvement-supplies tienne-normal-black-17px">{homeImprovementSupplies}</div>
            <div className="musical-instruments tienne-normal-black-17px">{musicalInstruments}</div>
            <div className="category-bar-item-2 tienne-normal-black-17px">{officeSupplies}</div>
            <div className="category-bar-item-2 tienne-normal-black-17px">{petSupplies}</div>
            <div className="category-bar-item-2 tienne-normal-black-17px">{sportingGoods}</div>
            <div className="category-bar-item-2 tienne-normal-black-17px">{toysGames}</div>
            <a href="javascript:SubmitForm('form10')" className="align-self-flex-start">
              <div className="create-new-listing">
                <div className="overlap-group1-3">
                  <div className="rectangle-2"></div>
                  <div className="create-new-listing-1 tienne-normal-black-20px">{createNewListing}</div>
                </div>
              </div>
            </a>
            <div className="overlap-group-5">
              <div className="rectangle-2"></div>
              <div className="filter tienne-normal-black-20px">{filter}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WishlistedItemsPage;
