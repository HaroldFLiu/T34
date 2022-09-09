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
import Button from "../Button";
import "./GroupPage.css";

/* needs a loop function to loop through displaying products*/
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
          <Link to="/selling-page">
            <div className="shop-8 tienne-bold-black-16px">{shop1}</div>
          </Link>
            <Link to="/selling-page">
              <div className="sell-8 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton2 />
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
              <Link to="/home-page">
              <div className="place-4">{place}</div>
              </Link>
              <Link to="/home-page">
                <div className="shop-9">{shop2}</div>
              </Link>
              <a href="/selling-page">
                <div className="sell-9 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="/group-page">
                <div className="groups-4 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="/wishlisted-items-page">
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
                  <div className="join-group-2 tienne-normal-black-12px">
                  <button type="join-group-btn">
                    {joinGroup1}
                    </button> 
                  </div>
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
                  <div className="join-group-2 tienne-normal-black-12px">
                  <button type="join-group-btn">
                    {joinGroup2}
                    </button> 
                  </div>
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
            <a href="javascript:SubmitForm('form18')" className="align-self-flex-start">
              <div className="create-new-listing-4">
                <div className="overlap-group1-5">
                  <div className="rectangle-2-2"></div>
                  <div className="create-new-listing-5 tienne-normal-black-20px">  
                    <a href="/new-item-listing-page"> {createNewListing} </a>
                  </div>
                </div>
              </div>
            </a>
            <div className="overlap-group-15">
              <div className="rectangle-2-2"></div>
              <div className="filter-2 tienne-normal-black-20px">
                <button className="btn-block" type="filter-btn">
                  {filter}
                </button> 
              </div>
            </div>
          </div>
          <Button />
        </div>
      </form>
    </div>
  );
}

export default GroupPage;
