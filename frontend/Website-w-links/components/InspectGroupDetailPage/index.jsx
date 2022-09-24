import React from "react";
import { Link } from "react-router-dom";
import MiddleArea2 from "../MiddleArea2";
import MiddleBar3 from "../MiddleBar3";
import "./InspectGroupDetailPage.css";

function InspectGroupDetailPage(props) {
  const {
    logoHere,
    search,
    sell1,
    shop1,
    lizwhales,
    logOut,
    line1,
    place,
    shop2,
    sell2,
    groups,
    wishlist,
    polygon1,
    browseByCategory,
    line2,
    createNewGroup,
    searchHere,
    ellipse1,
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
    rectangle6,
    spanText1,
    spanText2,
    joinGroup1,
    ownerYenfug,
    marketplaceSellers,
    joinGroup2,
    line7,
    ellipse4,
    filter,
    middleArea2Props,
    middleBar3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inspect-group-detail-page screen">
        <div className="overlap-group-container">
          <div className="overlap-group14">
            <div className="top-bar-10">
              <div className="logo-here tienne-normal-black-48px">{logoHere}</div>
              <div className="top-bar-11">
                <div className="search-container-5">
                  <div className="search-bar-backing-1"></div>
                  <div className="search tienne-bold-black-16px">{search}</div>
                </div>
                <div className="overlap-group1-10 tienne-bold-black-16px">
                  <div className="sell-16">{sell1}</div>
                  <div className="shop-16">{shop1}</div>
                </div>
              </div>
            </div>
            <div className="overlap-group11">
              <div className="search-bar-backing"></div>
              <div className="lizwhales tienne-bold-black-16px">{lizwhales}</div>
            </div>
          </div>
          <div className="overlap-group10-1">
            <div className="search-bar-backing"></div>
            <div className="log-out tienne-bold-black-16px">{logOut}</div>
          </div>
        </div>
        <div className="divider-bar-8">
          <img className="line-1-8" src={line1} />
          <div className="flex-row-9 tienne-bold-black-24px">
            <Link to="/home-page">
              <div className="place-9 tienne-bold-black-24px">{place}</div>
            </Link>
            <div className="shop-17">{shop2}</div>
            <div className="sell-17">{sell2}</div>
            <div className="groups-8">{groups}</div>
            <div className="wishlist-8">{wishlist}</div>
            <div className="overlap-group9-1">
              <img className="polygon-1" src={polygon1} />
              <div className="browse-by-category tienne-bold-black-24px">{browseByCategory}</div>
            </div>
          </div>
          <img className="line-2-8" src={line2} />
        </div>
        <div className="overlap-group-container-1">
          <div className="overlap-group13">
            <MiddleArea2
              myGroups={middleArea2Props.myGroups}
              joinGroup1={middleArea2Props.joinGroup1}
              joinGroup2={middleArea2Props.joinGroup2}
              joinGroup3={middleArea2Props.joinGroup3}
              className={middleArea2Props.className}
            />
            <div className="overlap-group5-4">
              <div className="rectangle-2-5"></div>
              <div className="create-new-group tienne-normal-black-20px">{createNewGroup}</div>
            </div>
            <div className="overlap-group7-2">
              <div className="rectangle-2-6"></div>
              <div className="search-here tienne-normal-black-20px">{searchHere}</div>
              <img className="ellipse-1" src={ellipse1} />
            </div>
            <div className="category-bar-5">
              <div className="categories-5 tienne-normal-black-25px">{categories}</div>
              <div className="vechicles-5 tienne-normal-black-17px">{vechicles}</div>
              <div className="category-bar-item-15 tienne-normal-black-17px">{apparel}</div>
              <div className="category-bar-item-16 tienne-normal-black-17px">{classified}</div>
              <div className="category-bar-item-15 tienne-normal-black-17px">{eletronics}</div>
              <div className="category-bar-item-15 tienne-normal-black-17px">{entertainment}</div>
              <div className="category-bar-item-16 tienne-normal-black-17px">{family}</div>
              <div className="category-bar-item-16 tienne-normal-black-17px">{gardenOutdoor}</div>
              <div className="category-bar-item-15 tienne-normal-black-17px">{hobbies}</div>
              <div className="category-bar-item-16 tienne-normal-black-17px">{homeGoods}</div>
              <div className="home-improvement-supplies-5 tienne-normal-black-17px">{homeImprovementSupplies}</div>
              <div className="musical-instruments-5 tienne-normal-black-17px">{musicalInstruments}</div>
              <div className="category-bar-item-17 tienne-normal-black-17px">{officeSupplies}</div>
              <div className="category-bar-item-17 tienne-normal-black-17px">{petSupplies}</div>
              <div className="category-bar-item-17 tienne-normal-black-17px">{sportingGoods}</div>
              <div className="category-bar-item-17 tienne-normal-black-17px">{toysGames}</div>
            </div>
            <MiddleBar3
              wishlistedItems={middleBar3Props.wishlistedItems}
              x2174913Listings={middleBar3Props.x2174913Listings}
            />
            <div className="flex-row-10">
              <div className="flex-col-10">
                <img className="rectangle-6-2" src={rectangle6} />
                <div className="group-description-1">
                  <div className="marketplace-sellers-31-k-members-3 tienne-bold-black-15px">
                    <span className="tienne-bold-black-15px">{spanText1}</span>
                    <span className="tienne-normal-black-15px">{spanText2}</span>
                  </div>
                </div>
                <div className="overlap-group1-11">
                  <div className="join-group-3 tienne-normal-black-20px">{joinGroup1}</div>
                </div>
                <div className="owner-yen-fug tienne-normal-black-20px">{ownerYenfug}</div>
              </div>
              <div className="flex-col-11">
                <div className="marketplace-sellers tienne-normal-black-48px">{marketplaceSellers}</div>
                <div className="lorem-ipsum-dolor-si tienne-normal-black-20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ornare lectus sit amet est placerat in egestas erat. Duis at tellus at urna
                  condimentum mattis pellentesque id nibh. Vulputate eu scelerisque felis imperdiet proin. Varius quam
                  quisque id diam vel quam elementum. Felis imperdiet proin fermentum leo vel orci porta. Consequat
                  mauris nunc congue nisi vitae suscipit tellus mauris. Sed euismod nisi porta lorem. Lacus sed viverra
                  tellus in hac habitasse platea dictumst. Nibh nisl condimentum id venenatis a condimentum vitae sapien
                  pellentesque. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Nunc pulvinar sapien et ligula
                  ullamcorper malesuada proin libero. In hendrerit gravida rutrum quisque non tellus orci ac. Molestie
                  nunc non blandit massa enim nec dui nunc. At varius vel pharetra vel turpis nunc eget lorem dolor.
                  Quis eleifend quam adipiscing vitae proin. Tellus at urna condimentum mattis pellentesque id nibh
                  tortor.
                </div>
                <div className="overlap-group-21">
                  <div className="join-group-4">{joinGroup2}</div>
                </div>
              </div>
            </div>
            <img className="line-7" src={line7} />
            <div className="container-btn">   
            </div>
            <Link to="/group-page">
              <img className="ellipse-4" src={ellipse4} />
            </Link>
            </div>
          <div className="overlap-group6-2">
            <div className="rectangle-2-5"></div>
            <div className="filter-5 tienne-normal-black-20px">{filter}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspectGroupDetailPage;

/* potential button type
            <button type="close-btn">
             <img className="ellipse-4" src={ellipse4} />
            </button>
            */