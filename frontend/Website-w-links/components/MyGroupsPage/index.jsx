import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";
import MiddleBar from "../MiddleBar";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import MiddleArea2 from "../MiddleArea2";
import SideSearch from "../SideSearch";
import SearchButton2 from "../SearchButton2";
import CreateGroupButton from "../CreateGroupButton";
import "./MyGroupsPage.css";

function MyGroupsPage(props) {
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
    middleArea2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="my-groups-page screen" name="form14" action="form14" method="post">
        <div className="top-bar-3">
          <div className="rectangle-22-3"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group5-2">
            <div className="shop-6 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-6 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className="bar-container-1">
          <MiddleBar
            wishlistedItems={middleBarProps.wishlistedItems}
            x2174913Listings={middleBarProps.x2174913Listings}
            className={middleBarProps.className}
          />
          <div className="divider-bar-3">
            <img className="line-1-3" src={line1} />
            <div className="flex-row-3">
              <Link to="/home-page">
                <div className="place-3 tienne-bold-black-24px">{place}</div>
              </Link>
              < a href="/test-page">
                <div className="shop-7 tienne-bold-black-24px">{shop2}</div>
              </a>
              < a href="/selling-page">
                <div className="sell-7 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="/group-page">
                <div className="groups-3 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="/wishlisted-items-page">
                <div className="wishlist-3 tienne-bold-black-24px">{wishlist}</div>
              </a>
              <BROWESEBYCATE />
            </div>
            <img className="line-2-3" src={line2} />
            <SortByDropsown />
          </div>
        </div>
        <div className="overlap-group6-1">
          <MiddleArea2
            myGroups={middleArea2Props.myGroups}
            joinGroup1={middleArea2Props.joinGroup1}
            joinGroup2={middleArea2Props.joinGroup2}
            joinGroup3={middleArea2Props.joinGroup3}
          />
          <div className="category-bar-1">
            <div className="search-container-1">
              <SideSearch />
              <SearchButton2 />
            </div>
            <div className="categories-1 tienne-normal-black-25px">{categories}</div>
            <div className="vechicles-1 tienne-normal-black-17px">{vechicles}</div>
            <div className="category-bar-item-3 tienne-normal-black-17px">{apparel}</div>
            <div className="category-bar-item-4 tienne-normal-black-17px">{classified}</div>
            <div className="category-bar-item-3 tienne-normal-black-17px">{eletronics}</div>
            <div className="category-bar-item-3 tienne-normal-black-17px">{entertainment}</div>
            <div className="category-bar-item-4 tienne-normal-black-17px">{family}</div>
            <div className="category-bar-item-4 tienne-normal-black-17px">{gardenOutdoor}</div>
            <div className="category-bar-item-3 tienne-normal-black-17px">{hobbies}</div>
            <div className="category-bar-item-4 tienne-normal-black-17px">{homeGoods}</div>
            <div className="home-improvement-supplies-1 tienne-normal-black-17px">{homeImprovementSupplies}</div>
            <div className="musical-instruments-1 tienne-normal-black-17px">{musicalInstruments}</div>
            <div className="category-bar-item-5 tienne-normal-black-17px">{officeSupplies}</div>
            <div className="category-bar-item-5 tienne-normal-black-17px">{petSupplies}</div>
            <div className="category-bar-item-5 tienne-normal-black-17px">{sportingGoods}</div>
            <div className="category-bar-item-5 tienne-normal-black-17px">{toysGames}</div>
            <a href="javascript:SubmitForm('form14')" className="align-self-flex-start">
              <div className="create-new-listing-2">
                <div className="overlap-group1-4">
                  <div className="rectangle-2-1"></div>
                  <div className="create-new-listing-3 tienne-normal-black-20px">{createNewListing}</div>
                </div>
              </div>
            </a>
            <div className="overlap-group-8">
              <div className="rectangle-2-1"></div>
              <div className="filter-1 tienne-normal-black-20px">{filter}</div>
            </div>
          </div>
          <CreateGroupButton />
        </div>
      </form>
    </div>
  );
}

export default MyGroupsPage;
