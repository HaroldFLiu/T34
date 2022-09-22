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
// search btn from side category bar
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
    logo,
  } = props;

  return (
    <div className="container-center-horizontal" >
    <form className="home-page screen" name="form29" action="form29" method="post" >
      <div className="top-bar-9">
        <div className="rectangle-22-7"> <img src={logo} className="logo-position"></img> </div>
        <SearchInput />
        <SearchButton />
        <div className="overlap-group2-8">
          <Link to="/test-page">
            <div className="shop-top tienne-bold-black-16px">SHOP</div>
          </Link>
          <Link to="/selling-page">
            <div className="sell-top tienne-bold-black-16px">SELL</div>
          </Link>
        </div>
        <LoginButton2 />
        <SignUpButton />
      </div>
      <div className="bar-container-4">
        <MiddleBar
          wishlistedItems="Home"
          x2174913Listings="no. listings here"
          className={middleBarProps.className}
        />
        <div className="divider-bar-7">
          <img className="line-1-7" src={line1} />
          <div className="flex-row-7 tienne-bold-black-24px"> 
          <Link to="/home-page">
            <div className="place-8">HOME</div>
          </Link> 
          <Link to="/test-page">
            <div className="shop-15">SHOP</div>
          </Link>
            <a href="/selling-page">
              <div className="sell-15 tienne-bold-black-24px">SELL</div>
            </a>
            <a href="/group-page">
              <div className="groups-7 tienne-bold-black-24px">GROUPS</div>
            </a>
            <a href="/wishlisted-items-page">
              <div className="wishlist-7 tienne-bold-black-24px">WISHLIST</div>
            </a>
            <BROWESEBYCATE/>
          </div>
          <img className="line-2-7" src={line2} />
          <SortByDropsown />
        </div>
      </div>
      <div className="flex-row-8">
        <div className="overlap-group4-5">
          <div className="todays-listings tienne-normal-black-30px">Today's Listings:</div>
          <div className="middle-area-5">
            <Link to="/view-item-page">
              <div className="product-box"> </div>
            </Link>
            <div className="prodct-descrip-price-2">
              <div className="overlap-group-19">
                <div className="items-information">
                  <span className="tienne-bold-black-15px"><React.Fragment>price <br /></React.Fragment> </span>
                  <span className="tienne-normal-black-15px">Item Name</span>
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
            <a href="javascript:SubmitForm('form29')" className="align-self-flex-start">
              <div className="create-new-listing-8">
                <div className="overlap-group1-9">
                  <div className="rectangle-2-4"></div>
                  <div className="create-new-listing-9 tienne-normal-black-20px">
                   <a href="/new-item-listing-page"> {createNewListing} </a> 
                  </div>
                </div>
              </div>
            </a>
            <div className="overlap-group-20">
              <div className="rectangle-2-4"></div>
              <div className="filter-4 tienne-normal-black-20px">
              <button className="btn-block" type="filter-btn">
                {filter}
              </button> 
              </div>
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

/*
// added logo to home page line60

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
    logo,
  } = props;

  return (
    <div className="container-center-horizontal" >
    <form className="home-page screen" name="form29" action="form29" method="post" >
      <div className="top-bar-9">
        <div className="rectangle-22-7"> <img src={logo} className="logo-position"></img> </div>
        <SearchInput />
        <SearchButton />
        <div className="overlap-group2-8">
          <Link to="/test-page">
            <div className="shop-top tienne-bold-black-16px">SHOP</div>
          </Link>
          <Link to="/selling-page">
            <div className="sell-top tienne-bold-black-16px">SELL</div>
          </Link>
        </div>
        <LoginButton2 />
        <SignUpButton />
      </div>
      <div className="bar-container-4">
        <MiddleBar
          wishlistedItems="Home"
          x2174913Listings="no. listings here"
          className={middleBarProps.className}
        />
        <div className="divider-bar-7">
          <img className="line-1-7" src={line1} />
          <div className="flex-row-7 tienne-bold-black-24px"> 
          <Link to="/home-page">
            <div className="place-8">HOME</div>
          </Link> 
          <Link to="/test-page">
            <div className="shop-15">SHOP</div>
          </Link>
            <a href="/selling-page">
              <div className="sell-15 tienne-bold-black-24px">SELL</div>
            </a>
            <a href="/group-page">
              <div className="groups-7 tienne-bold-black-24px">GROUPS</div>
            </a>
            <a href="/wishlisted-items-page">
              <div className="wishlist-7 tienne-bold-black-24px">WISHLIST</div>
            </a>
            <BROWESEBYCATE/>
          </div>
          <img className="line-2-7" src={line2} />
          <SortByDropsown />
        </div>
      </div>
      <div className="flex-row-8">
        <div className="overlap-group4-5">
          <div className="middle-area-5">
            <div className="todays-listings tienne-normal-black-30px">Today's Listings:</div>
            <Link to="/view-item-page">
              <div className="rectangle-3-1"> </div>
            </Link>
            <div className="prodct-descrip-price-2">
              <div className="overlap-group-19">
                <div className="x1595-sanrio-kurumi-plush-2 tienne-bold-black-15px">
                  <span className="tienne-bold-black-15px"><React.Fragment>price <br /></React.Fragment> </span>
                  <span className="tienne-normal-black-15px">Item Name</span>
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
            <a href="javascript:SubmitForm('form29')" className="align-self-flex-start">
              <div className="create-new-listing-8">
                <div className="overlap-group1-9">
                  <div className="rectangle-2-4"></div>
                  <div className="create-new-listing-9 tienne-normal-black-20px">
                   <a href="/new-item-listing-page"> {createNewListing} </a> 
                  </div>
                </div>
              </div>
            </a>
            <div className="overlap-group-20">
              <div className="rectangle-2-4"></div>
              <div className="filter-4 tienne-normal-black-20px">
              <button className="btn-block" type="filter-btn">
                {filter}
              </button> 
              </div>
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
*/
