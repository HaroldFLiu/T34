import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";
import BROWESEBYCATE from "../BROWESEBYCATE";
import GroupPrivacy from "../GroupPrivacy";
import ImageAdd from "../ImageAdd";
import "./GroupCreation.css";

function GroupCreation(props) {
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
    andStartListingProductsRightaway,
    createAGroupNow,
    line3,
    x2174913Groups,
    createGroup,
    line4,
    groupName,
    groupDescription,
    groupPrivacy,
    groupPrivacyProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="group-creation screen" name="form3" action="form3" method="post">
        <div className="top-bar">
          <div className="rectangle-22"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group4">
            <div className="shop tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className="divider-bar">
          <img className="line-1" src={line1} />
          <div className="flex-row">
            <Link to="/home-page">
              <div className="place tienne-bold-black-24px">{place}</div>
            </Link>
            <div className="shop-1 tienne-bold-black-24px">{shop2}</div>
            <a href="javascript:SubmitForm('form3')">
              <div className="sell-1 tienne-bold-black-24px">{sell2}</div>
            </a>
            <a href="javascript:SubmitForm('form3')">
              <div className="groups tienne-bold-black-24px">{groups}</div>
            </a>
            <a href="javascript:SubmitForm('form3')">
              <div className="wishlist tienne-bold-black-24px">{wishlist}</div>
            </a>
            <BROWESEBYCATE />
          </div>
          <img className="line-2" src={line2} />
        </div>
        <div className="middle-bar">
          <div className="overlap-group3">
            <p className="and-start-listing-products-rightaway tienne-normal-black-15px">
              {andStartListingProductsRightaway}
            </p>
            <div className="create-a-group-now tienne-bold-black-39px">{createAGroupNow}</div>
          </div>
          <img className="line-3" src={line3} />
          <div className="group-container">
            <div className="x2174913-groups tienne-normal-black-17px">{x2174913Groups}</div>
            <div className="overlap-group">
              <div className="create-group tienne-normal-black-20px">{createGroup}</div>
            </div>
          </div>
          <img className="line-4" src={line4} />
        </div>
        <div className="overlap-group5">
          <div className="group-create-area tienne-normal-black-25px">
            <div className="group-name">{groupName}</div>
            <div className="rectangle-13"></div>
            <div className="group-description">{groupDescription}</div>
            <div className="rectangle-14"></div>
            <div className="group-privacy">{groupPrivacy}</div>
            <GroupPrivacy
              anyoneCanJoinThisGroup={groupPrivacyProps.anyoneCanJoinThisGroup}
              onlyPeopleGivenAc={groupPrivacyProps.onlyPeopleGivenAc}
            />
          </div>
          <ImageAdd />
        </div>
      </form>
    </div>
  );
}

export default GroupCreation;
