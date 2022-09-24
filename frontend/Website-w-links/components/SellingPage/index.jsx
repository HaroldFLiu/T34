import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton2 from "../LoginButton2";
import SignUpButton from "../SignUpButton";
import MiddleBar from "../MiddleBar";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import MiddleArea from "../MiddleArea";
import SideSearch from "../SideSearch";
import SearchButton2 from "../SearchButton2";
import "./SellingPage.css";

function SellingPage(props) {
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
            <Link to="/test-page">
              <div className="shop-top tienne-bold-black-16px">{shop1}</div>
            </Link>
            <Link to="/new-item-listing-page">
              <div className="sell-top tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton2 />
          <SignUpButton />
        </div>
        <div className="bar-container-3">
          <MiddleBar
            wishlistedItems={middleBarProps.wishlistedItems}
            x2174913Listings="no listings here"
            className={middleBarProps.className}
          />
          <div className="divider-bar-5">
            <img className="line-1-5" src={line1} />
            <div className="flex-row-5">
              <Link to="/home-page">
                <div className="place-5 tienne-bold-black-24px">{place}</div>
              </Link>
              < a href="/test-page">
                <div className="shop-11 tienne-bold-black-24px">{shop2}</div>
              </a>
              <a href="/selling-page">
                <div className="sell-11 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="/group-page">
                <div className="groups-5 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="/wishlisted-items-page">
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
            <div className="categories tienne-normal-black-25px">{categories}</div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{vechicles}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
            <a href="#">{apparel}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{classified}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{eletronics}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{entertainment}</a>  
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{family}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{gardenOutdoor}</a> 
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{hobbies}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{homeGoods}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{homeImprovementSupplies}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{musicalInstruments}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{officeSupplies}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{petSupplies}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{sportingGoods}</a>
            </div>
            <div className="category-bar-items tienne-normal-black-17px">
              <a href="#">{toysGames}</a>
            </div>
            <a href="javascript:SubmitForm('form22')" className="align-self-flex-start">
              <div className="create-new-listing-6">
                <div className="overlap-group1-7">
                  <div className="rectangle-2-3"></div>
                  <div className="create-new-listing-7 tienne-normal-black-20px">
                    <a href="/new-item-listing-page"> {createNewListing} </a> 
                  </div>
                </div>
              </div>
            </a>
            <div className="overlap-group-16">
              <div className="rectangle-2-3"></div>
              <div className="filter-3 tienne-normal-black-20px">
              <button className="btn-block" type="filter-btn">
                {filter}
              </button> 
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SellingPage;
