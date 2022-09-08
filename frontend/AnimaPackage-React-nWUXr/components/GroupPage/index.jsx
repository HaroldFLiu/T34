import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";
import MiddleBar from "../MiddleBar";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import SideSearch from "../SideSearch";
import SearchButton2 from "../SearchButton2";
import Button from "../Button";
import "./GroupPage.css";

function GroupPage(props) {
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
    suggestedGroups,
    rectangle6,
    joinGroup1,
    spanText1,
    spanText2,
    rectangle4,
    joinGroup2,
    spanText3,
    spanText4,
    rectangle5,
    joinGroup3,
    spanText5,
    spanText6,
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
      <form className="group-page screen" name="form18" action="form18" method="post">
        <div className="top-bar-4">
          <div className="rectangle-22-4"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group5-3">
            <div className="shop-8 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-8 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className="bar-container-2">
          <MiddleBar
            wishlistedItems={middleBarProps.wishlistedItems}
            x2174913Listings={middleBarProps.x2174913Listings}
            className={middleBarProps.className}
          />
          <div className="divider-bar-4">
            <img className="line-1-4" src={line1} />
            <div className="flex-row-4 tienne-bold-black-24px">
              <div className="place-4">{place}</div>
              <div className="shop-9">{shop2}</div>
              <a href="javascript:SubmitForm('form18')">
                <div className="sell-9 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="javascript:SubmitForm('form18')">
                <div className="groups-4 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="javascript:SubmitForm('form18')">
                <div className="wishlist-4 tienne-bold-black-24px">{wishlist}</div>
              </a>
              <BROWESEBYCATE />
            </div>
            <img className="line-2-4" src={line2} />
            <SortByDropsown />
          </div>
        </div>
        <div className="overlap-group7-1">
          <div className="middle-area-4">
            <div className="flex-col-9">
              <div className="suggested-groups-1 tienne-normal-black-30px">{suggestedGroups}</div>
              <div className="overlap-group4-4">
                <Link to="/inspect-group-detail-page">
                  <img className="rectangle-6-1" src={rectangle6} />
                </Link>
              </div>
              <div className="overlap-group-13">
                <div className="overlap-group-14">
                  <div className="join-group-2 tienne-normal-black-12px">{joinGroup1}</div>
                </div>
                <div className="marketplace-sellers-31-k-members-2 tienne-bold-black-15px">
                  <span className="tienne-bold-black-15px">{spanText1}</span>
                  <span className="tienne-normal-black-15px">{spanText2}</span>
                </div>
              </div>
              <div className="rectangle-10"></div>
            </div>
            <div className="flex-col-8">
              <img className="rectangle-11" src={rectangle4} />
              <div className="overlap-group-13">
                <div className="overlap-group-14">
                  <div className="join-group-2 tienne-normal-black-12px">{joinGroup2}</div>
                </div>
                <div className="marketplace-sellers-31-k-members-2 tienne-bold-black-15px">
                  <span className="tienne-bold-black-15px">{spanText3}</span>
                  <span className="tienne-normal-black-15px">{spanText4}</span>
                </div>
              </div>
              <div className="rectangle-10"></div>
            </div>
            <div className="flex-col-8">
              <img className="rectangle-11" src={rectangle5} />
              <div className="overlap-group2-5">
                <div className="overlap-group-14">
                  <div className="join-group-2 tienne-normal-black-12px">{joinGroup3}</div>
                </div>
                <div className="marketplace-sellers-31-k-members-2 tienne-bold-black-15px">
                  <span className="tienne-bold-black-15px">{spanText5}</span>
                  <span className="tienne-normal-black-15px">{spanText6}</span>
                </div>
              </div>
              <div className="rectangle-9-3"></div>
            </div>
          </div>
          <div className="category-bar-2">
            <div className="search-container-2">
              <SideSearch />
              <SearchButton2 />
            </div>
            <div className="categories-2 tienne-normal-black-25px">{categories}</div>
            <div className="vechicles-2 tienne-normal-black-17px">{vechicles}</div>
            <div className="category-bar-item-6 tienne-normal-black-17px">{apparel}</div>
            <div className="category-bar-item-7 tienne-normal-black-17px">{classified}</div>
            <div className="category-bar-item-6 tienne-normal-black-17px">{eletronics}</div>
            <div className="category-bar-item-6 tienne-normal-black-17px">{entertainment}</div>
            <div className="category-bar-item-7 tienne-normal-black-17px">{family}</div>
            <div className="category-bar-item-7 tienne-normal-black-17px">{gardenOutdoor}</div>
            <div className="category-bar-item-6 tienne-normal-black-17px">{hobbies}</div>
            <div className="category-bar-item-7 tienne-normal-black-17px">{homeGoods}</div>
            <div className="home-improvement-supplies-2 tienne-normal-black-17px">{homeImprovementSupplies}</div>
            <div className="musical-instruments-2 tienne-normal-black-17px">{musicalInstruments}</div>
            <div className="category-bar-item-8 tienne-normal-black-17px">{officeSupplies}</div>
            <div className="category-bar-item-8 tienne-normal-black-17px">{petSupplies}</div>
            <div className="category-bar-item-8 tienne-normal-black-17px">{sportingGoods}</div>
            <div className="category-bar-item-8 tienne-normal-black-17px">{toysGames}</div>
            <a href="javascript:SubmitForm('form18')" className="align-self-flex-start">
              <div className="create-new-listing-4">
                <div className="overlap-group1-5">
                  <div className="rectangle-2-2"></div>
                  <div className="create-new-listing-5 tienne-normal-black-20px">{createNewListing}</div>
                </div>
              </div>
            </a>
            <div className="overlap-group-15">
              <div className="rectangle-2-2"></div>
              <div className="filter-2 tienne-normal-black-20px">{filter}</div>
            </div>
          </div>
          <Button />
        </div>
      </form>
    </div>
  );
}

export default GroupPage;
