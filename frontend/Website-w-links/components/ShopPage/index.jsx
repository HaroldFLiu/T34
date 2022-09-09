import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";
import MiddleBar from "../MiddleBar";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import MiddleArea from "../MiddleArea";
import SideSearch from "../SideSearch";
import SearchButton2 from "../SearchButton2";
import "./ShopPage.css";

function ShopPage(props) {
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
    middleAreaProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="selling-page screen" name="form22" action="form22" method="post">
        <div className="top-bar-5">
          <div className="rectangle-22-5"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group1-6">
            <div className="shop-10 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-10 tienne-bold-black-16px">{sell1}123</div>
            </Link>
          </div>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className="bar-container-3">
          <MiddleBar
            wishlistedItems={middleBarProps.wishlistedItems}
            x2174913Listings={middleBarProps.x2174913Listings}
            className={middleBarProps.className}
          />
          <div className="divider-bar-5">
            <img className="line-1-5" src={line1} />
            <div className="flex-row-5">
              <Link to="/home-page">
                <div className="place-5 tienne-bold-black-24px">{place}</div>
              </Link>
              <div className="shop-11 tienne-bold-black-24px">{shop2}</div>
              <a href="javascript:SubmitForm('form22')">
                <div className="sell-11 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="javascript:SubmitForm('form22')">
                <div className="groups-5 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="javascript:SubmitForm('form22')">
                <div className="wishlist-5 tienne-bold-black-24px">{wishlist}</div>
              </a>
              <BROWESEBYCATE />
            </div>
            <img className="line-2-5" src={line2} />
            <SortByDropsown />
          </div>
        </div>
        <div className="overlap-group2-6">
          <MiddleArea myWishlist={middleAreaProps.myWishlist} />
          <div className="category-bar-3">
            <div className="search-container-3">
              <SideSearch />
              <SearchButton2 />
            </div>
            <div className="categories-3 tienne-normal-black-25px">{categories}</div>
            <div className="vechicles-3 tienne-normal-black-17px">{vechicles}</div>
            <div className="category-bar-item-9 tienne-normal-black-17px">{apparel}</div>
            <div className="category-bar-item-10 tienne-normal-black-17px">{classified}</div>
            <div className="category-bar-item-9 tienne-normal-black-17px">{eletronics}</div>
            <div className="category-bar-item-9 tienne-normal-black-17px">{entertainment}</div>
            <div className="category-bar-item-10 tienne-normal-black-17px">{family}</div>
            <div className="category-bar-item-10 tienne-normal-black-17px">{gardenOutdoor}</div>
            <div className="category-bar-item-9 tienne-normal-black-17px">{hobbies}</div>
            <div className="category-bar-item-10 tienne-normal-black-17px">{homeGoods}</div>
            <div className="home-improvement-supplies-3 tienne-normal-black-17px">{homeImprovementSupplies}</div>
            <div className="musical-instruments-3 tienne-normal-black-17px">{musicalInstruments}</div>
            <div className="category-bar-item-11 tienne-normal-black-17px">{officeSupplies}</div>
            <div className="category-bar-item-11 tienne-normal-black-17px">{petSupplies}</div>
            <div className="category-bar-item-11 tienne-normal-black-17px">{sportingGoods}</div>
            <div className="category-bar-item-11 tienne-normal-black-17px">{toysGames}</div>
            <a href="javascript:SubmitForm('form22')" className="align-self-flex-start">
              <div className="create-new-listing-6">
                <div className="overlap-group1-7">
                  <div className="rectangle-2-3"></div>
                  <div className="create-new-listing-7 tienne-normal-black-20px">{createNewListing}</div>
                </div>
              </div>
            </a>
            <div className="overlap-group-16">
              <div className="rectangle-2-3"></div>
              <div className="filter-3 tienne-normal-black-20px">{filter}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShopPage;
