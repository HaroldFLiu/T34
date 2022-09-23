import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton2";
import SignUpButton from "../SignUpButton";
import BROWESEBYCATE from "../BROWESEBYCATE";
import GroupPrivacy from "../GroupPrivacy";
import ImageAdd from "../ImageAdd";
import "./NewItemListingPage.css";

/* <div contentEditable="true" className="rectangle-13-1"></div> CHANGE THESE LATER !! */

function NewItemListingPage(props) {
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
    andStartSellingProductsRightaway,
    listAnItem,
    line3,
    x2174913Groups,
    publishItem,
    line4,
    itemName,
    price,
    itemDescription,
    selectOne,
    polygon41,
    catergory,
    itemPrivacy,
    selectOneIfApplicable,
    polygon42,
    groupSelect,
    groupPrivacyProps,
    imageAddProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="new-item-listing-page screen" name="form6" action="form6" method="post">
        <div className="top-bar-1">
          <div className="rectangle-22-1"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group9">
            <div className="shop-2 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-2 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className="divider-bar-1">
          <img className="line-1-1" src={line1} />
          <div className="flex-row-1">
            <Link to="/home-page">
              <div className="place-1 tienne-bold-black-24px">{place}</div>
            </Link>
            < a href="/test-page">
              <div className="shop-3 tienne-bold-black-24px">{shop2}</div>
            </a>
            <a href="/selling-page">
              <div className="sell-3 tienne-bold-black-24px">{sell2}</div>
            </a>
            <a href="/group-page">
              <div className="groups-1 tienne-bold-black-24px">{groups}</div>
            </a>
            <a href="wishlisted-items-page">
              <div className="wishlist-1 tienne-bold-black-24px">{wishlist}</div>
            </a>
            <BROWESEBYCATE />
          </div>
          <img className="line-2-1" src={line2} />
        </div>
        <div className="middle-bar-1">
          <div className="overlap-group8">
            <p className="and-start-selling-products-rightaway tienne-normal-black-15px">
              {andStartSellingProductsRightaway}
            </p>
            <div className="list-an-item tienne-bold-black-39px">{listAnItem}</div>
          </div>
          <img className="line-3-1" src={line3} />
          <div className="group-container-2">
            <div className="x2174913-groups-1 tienne-normal-black-17px">{x2174913Groups}</div>
            
            {/*
            <div className="overlap-group-4">
              <div className="publish-item tienne-normal-black-20px">{publishItem}</div>
            </div>*/}
          </div>
          <img className="line-4-1" src={line4} />
        </div>
        <div className="overlap-group10">
          <div className="group-create-area-1">
            <div className="overlap-group6">
              {/*<div contentEditable="true" className="rectangle-13-1"></div>*/}
              <input
                type="text"
                className="rectangle-13-1"           
            />
              <div className="item-name tienne-normal-black-25px">{itemName}</div>
            </div>
            <div className="overlap-group5-1">
              <div className="price tienne-normal-black-25px">{price}</div>
             {/*<div contentEditable="true" className="rectangle-15"></div>*/}
             <input
                type="text"
                className="rectangle-15"           
            />
            </div>
            <div className="overlap-group7">
              <div className="item-description tienne-normal-black-25px">{itemDescription}</div>
                {/*<div contentEditable="true" className="rectangle-14-1"></div>*/}
                <input
                type="text"
                className="rectangle-14-1"           
            />
            </div>
            <div className="overlap-group3-1">
              {/*NEW DROP DOWN BUTTON*/}
              <div class="dropdown">
                <button class="dropbtn tienne-normal-black-25px" >Please select one</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div className="catergory tienne-normal-black-25px">Category:</div>
               {/*NEW DROP DOWN BUTTON*/}
               <div class="dropdown">
                <button class="dropbtn tienne-normal-black-25px" >Select if applicable</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div className="group-select tienne-normal-black-25px">{groupSelect}</div>
            </div>
            <div className="item-privacy tienne-normal-black-25px">{itemPrivacy}</div>
            <div className="public tienne-normal-black-25px">
              {/* RADIO BUTTON*/}
              <div className="radio">
            <label>
            <input
              type="radio"
              value="public"
            />
            Public
          </label>
        </div>
              
            </div>
            <div className="private tienne-normal-black-25px">
                {/* RADIO BUTTON*/}
                <div className="radio">
            <label>
            <input
              type="radio"
              value="public"
            />
            Public
          </label>
        </div>
            </div>
             {/* REMPVE
            <GroupPrivacy
              anyoneCanJoinThisGroup={groupPrivacyProps.anyoneCanJoinThisGroup}
              onlyPeopleGivenAc={groupPrivacyProps.onlyPeopleGivenAc}
              className={groupPrivacyProps.className}
            />
             {/*  <div className="overlap-group4-1">
              <div className="rectangle-16-1"></div>
              <img className="polygon-4-1" src={polygon42} />
              <div className="group-select tienne-normal-black-25px">{groupSelect}</div>
              <div className="select-one-if-applicable tienne-normal-black-20px">{selectOneIfApplicable}</div>
            </div>*/}
          </div>
          <ImageAdd />
          <ImageAdd className={imageAddProps.className} />
        </div>
      </form>
    </div>
  );
}

export default NewItemListingPage;
