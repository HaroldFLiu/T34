import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton2 from "../LoginButton2";
import SignUpButton from "../SignUpButton";
import MiddleBar from "../MiddleBar";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import SideSearch from "../SideSearch";
import SearchButton2 from "../SearchButton2";
import Pagination from "../Pagination";
import "./HomePage.css";

function HomePage(props) {
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
    todaysListings,
    spanText1,
    spanText2,
    iconStar,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="home-page screen" name="form29" action="form29" method="post">
        <div className="top-bar-9">
          <div className="rectangle-22-7"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group2-8">
            <div className="shop-14 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-14 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton2 />
          <SignUpButton />
        </div>
        <div className="bar-container-4">
          <MiddleBar
            wishlistedItems={middleBarProps.wishlistedItems}
            x2174913Listings={middleBarProps.x2174913Listings}
            className={middleBarProps.className}
          />
          <div className="divider-bar-7">
            <img className="line-1-7" src={line1} />
            <div className="flex-row-7 tienne-bold-black-24px">
              <div className="place-8">{place}</div>
              <div className="shop-15">{shop2}</div>
              <a href="javascript:SubmitForm('form29')">
                <div className="sell-15 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="javascript:SubmitForm('form29')">
                <div className="groups-7 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="javascript:SubmitForm('form29')">
                <div className="wishlist-7 tienne-bold-black-24px">{wishlist}</div>
              </a>
              <BROWESEBYCATE />
            </div>
            <img className="line-2-7" src={line2} />
            <SortByDropsown />
          </div>
        </div>
        <div className="flex-row-8">
          <div className="overlap-group4-5">
            <div className="middle-area-5">
              <div className="todays-listings tienne-normal-black-30px">{todaysListings}</div>
              <div className="rectangle-3-1"></div>
              <div className="prodct-descrip-price-2">
                <div className="overlap-group-19">
                  <div className="x1595-sanrio-kurumi-plush-2 tienne-bold-black-15px">
                    <span className="tienne-bold-black-15px">{spanText1}</span>
                    <span className="tienne-normal-black-15px">{spanText2}</span>
                  </div>
                  <img className="icon-star-3" src={iconStar} />
                </div>
              </div>
            </div>
            <div className="category-bar-4">
              <div className="search-container-4">
                <SideSearch />
                <SearchButton2 />
              </div>
              <div className="categories-4 tienne-normal-black-25px">{categories}</div>
              <div className="vechicles-4 tienne-normal-black-17px">{vechicles}</div>
              <div className="category-bar-item-12 tienne-normal-black-17px">{apparel}</div>
              <div className="category-bar-item-13 tienne-normal-black-17px">{classified}</div>
              <div className="category-bar-item-12 tienne-normal-black-17px">{eletronics}</div>
              <div className="category-bar-item-12 tienne-normal-black-17px">{entertainment}</div>
              <div className="category-bar-item-13 tienne-normal-black-17px">{family}</div>
              <div className="category-bar-item-13 tienne-normal-black-17px">{gardenOutdoor}</div>
              <div className="category-bar-item-12 tienne-normal-black-17px">{hobbies}</div>
              <div className="category-bar-item-13 tienne-normal-black-17px">{homeGoods}</div>
              <div className="home-improvement-supplies-4 tienne-normal-black-17px">{homeImprovementSupplies}</div>
              <div className="musical-instruments-4 tienne-normal-black-17px">{musicalInstruments}</div>
              <div className="category-bar-item-14 tienne-normal-black-17px">{officeSupplies}</div>
              <div className="category-bar-item-14 tienne-normal-black-17px">{petSupplies}</div>
              <div className="category-bar-item-14 tienne-normal-black-17px">{sportingGoods}</div>
              <div className="category-bar-item-14 tienne-normal-black-17px">{toysGames}</div>
              <a href="javascript:SubmitForm('form29')" className="align-self-flex-start">
                <div className="create-new-listing-8">
                  <div className="overlap-group1-9">
                    <div className="rectangle-2-4"></div>
                    <div className="create-new-listing-9 tienne-normal-black-20px">{createNewListing}</div>
                  </div>
                </div>
              </a>
              <div className="overlap-group-20">
                <div className="rectangle-2-4"></div>
                <div className="filter-4 tienne-normal-black-20px">{filter}</div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </form>
    </div>
  );
}

export default HomePage;
