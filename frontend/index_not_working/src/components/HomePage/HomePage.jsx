import React, { useEffect } from "react";
import "./HomePage.css";

function HomePage(props) {
  const {
    search,
    sell1,
    shop1,
    inputType1,
    inputPlaceholder1,
    login,
    signUp,
    line1,
    place1,
    shop2,
    sell2,
    groups,
    wishlist,
    polygon1,
    browseByCategory,
    line2,
    place2,
    line3,
    x2174913Listings,
    rectangle1,
    sortByDefault,
    polygon2,
    line4,
    inputType2,
    inputPlaceholder2,
    iconSearch,
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
    todaysListings,
    spanText1,
    spanText2,
    iconStar,
  } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".rectangle-1");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.2,
      overflow: false,
      delay: 0.4,
      transition: "none",
    });
  }, []);

  return (
    <div className="container-center-horizontal">
      <form className="home-page screen" name="form6" action="form6" method="post">
        <div className="top-bar">
          <div className="rectangle-22"></div>
          <div className="overlap-group6">
            <div className="top-bar-1">
              <div className="search-container">
                <a href="javascript:SubmitForm('form6')">
                  <div className="search-bar-backing-1"></div>
                </a>
                <div className="search tienne-bold-black-16px">{search}</div>
              </div>
              <div className="overlap-group-1 tienne-bold-black-16px">
                <div className="sell">{sell1}</div>
                <div className="shop">{shop1}</div>
              </div>
            </div>
            <input
              className="search-1 tienne-bold-black-20px"
              name="search"
              placeholder={inputPlaceholder1}
              type={inputType1}
            />
            <a href="javascript:SubmitForm('form6')">
              <div className="login">
                <div className="overlap-group">
                  <div className="search-bar-backing"></div>
                  <div className="login-1 tienne-bold-black-16px">{login}</div>
                </div>
              </div>
            </a>
          </div>
          <a href="javascript:history.back()">
            <div className="signup">
              <div className="overlap-group">
                <div className="search-bar-backing"></div>
                <div className="sign-up tienne-bold-black-16px">{signUp}</div>
              </div>
            </div>
          </a>
        </div>
        <div className="divider-bar">
          <img className="line-1" src={line1} />
          <div className="flex-row tienne-bold-black-24px">
            <div className="place">{place1}</div>
            <div className="shop-1">{shop2}</div>
            <a href="javascript:SubmitForm('form6')" className="align-self-flex-end">
              <div className="sell-1 tienne-bold-black-24px">{sell2}</div>
            </a>
            <a href="javascript:SubmitForm('form6')" className="align-self-flex-end">
              <div className="groups tienne-bold-black-24px">{groups}</div>
            </a>
            <a href="javascript:SubmitForm('form6')" className="align-self-flex-end">
              <div className="wishlist tienne-bold-black-24px">{wishlist}</div>
            </a>
            <div className="overlap-group5">
              <img className="polygon-1" src={polygon1} />
              <div className="browse-by-category tienne-bold-black-24px">{browseByCategory}</div>
            </div>
          </div>
          <img className="line-2" src={line2} />
        </div>
        <div className="middle-bar">
          <h1 className="place-1 tienne-bold-black-39px">{place2}</h1>
          <img className="line-3" src={line3} />
          <div className="flex-row-1">
            <div className="x2174913-listings tienne-normal-black-17px">{x2174913Listings}</div>
            <div className="overlap-group4">
              <div className="widget-wrapper">
                <img className="rectangle-1" src={rectangle1} />
              </div>
              <div className="sort-button">
                <div className="sort-by-default tienne-normal-black-18px">{sortByDefault}</div>
                <img className="polygon-2" src={polygon2} />
              </div>
            </div>
          </div>
          <img className="line-4" src={line4} />
        </div>
        <div className="flex-row-2">
          <div className="flex-col">
            <div className="overlap-group3">
              <div className="rectangle-2-1"></div>
              <input
                className="search-here tienne-normal-black-20px"
                name="searchhere"
                placeholder={inputPlaceholder2}
                type={inputType2}
              />
              <img className="icon-search" src={iconSearch} />
            </div>
            <div className="category-bar">
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
            </div>
            <a href="javascript:SubmitForm('form6')">
              <div className="create-new-listing">
                <div className="overlap-group1">
                  <div className="rectangle-2"></div>
                  <div className="create-new-listing-1 tienne-normal-black-20px">{createNewListing}</div>
                </div>
              </div>
            </a>
            <div className="overlap-group2">
              <div className="rectangle-2"></div>
              <div className="filter tienne-normal-black-20px">{filter}</div>
            </div>
          </div>
          <div className="middle-area">
            <div className="todays-listings tienne-normal-black-30px">{todaysListings}</div>
            <div className="rectangle-3"></div>
            <div className="prodct-descrip-price">
              <div className="overlap-group-2">
                <div className="x1595-sanrio-kurumi-plush tienne-bold-black-15px">
                  <span className="tienne-bold-black-15px">{spanText1}</span>
                  <span className="tienne-normal-black-15px">{spanText2}</span>
                </div>
                <img className="icon-star" src={iconStar} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
