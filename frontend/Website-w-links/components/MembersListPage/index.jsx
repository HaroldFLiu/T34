import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton2 from "../LoginButton2";
import SignUpButton from "../SignUpButton";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import SideSearch22 from "../SideSearch22";
import SearchButton32 from "../SearchButton32";
import Member1 from "../Member1";
import ManageDropdownButton from "../ManageDropdownButton";
import Member12 from "../Member12";
import "./MembersListPage.css";

function MembersListPage(props) {
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
    groupIcon,
    marketplaceSellers1,
    line3,
    x2174913Groups,
    line4,
    marketplaceSellers2,
    membersList,
    rizwhales1,
    ellipse51,
    rizwhales2,
    ellipse52,
    rizwhales3,
    ellipse53,
    rizwhales4,
    ellipse54,
    rizwhales5,
    ellipse55,
    rizwhales6,
    ellipse56,
    line8,
    member11Props,
    manageDropdownButton1Props,
    member12Props,
    manageDropdownButton2Props,
    manageDropdownButton3Props,
    manageDropdownButton4Props,
    member121Props,
    manageDropdownButton5Props,
    member122Props,
    manageDropdownButton6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="members-list-page screen" name="form6" action="form6" method="post">
        <div className="top-bar-3">
          <div className="rectangle-22-1"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group10">
            <div className="shop-2 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-2 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton2 />
          <SignUpButton />
        </div>
        <div className="divider-bar-1">
          <img className="line-1-1" src={line1} />
          <div className="flex-row-1">
            <Link to="/home-page">
              <div className="place-1 tienne-bold-black-24px">{place}</div>
            </Link>
            <div className="shop-3 tienne-bold-black-24px">{shop2}</div>
            <a href="javascript:SubmitForm('form6')">
              <div className="sell-3 tienne-bold-black-24px">{sell2}</div>
            </a>
            <a href="javascript:SubmitForm('form6')">
              <div className="groups-1 tienne-bold-black-24px">{groups}</div>
            </a>
            <a href="javascript:SubmitForm('form6')">
              <div className="wishlist-1 tienne-bold-black-24px">{wishlist}</div>
            </a>
            <BROWESEBYCATE />
            <SortByDropsown />
          </div>
          <img className="line-2-1" src={line2} />
        </div>
        <div className="flex-row-2">
          <div className="middle-bar-1">
            <img className="group-icon" src={groupIcon} />
            <div className="overlap-group1">
              <div className="marketplace-sellers tienne-bold-black-24px">{marketplaceSellers1}</div>
              <img className="line-3-1" src={line3} />
            </div>
            <div className="x2174913-groups-1 tienne-normal-black-17px">{x2174913Groups}</div>
            <img className="line-4-1" src={line4} />
          </div>
          <div className="flex-col">
            <div className="marketplace-sellers-1 tienne-bold-black-39px">{marketplaceSellers2}</div>
            <div className="side-search-bar">
              <div className="overlap-group-2">
                <div className="members-list tienne-normal-black-30px">{membersList}</div>
                <SideSearch22 />
              </div>
              <SearchButton32 />
            </div>
            <div className="overlap-group11">
              <div className="members-list-1">
                <div className="member-container">
                  <Member1 ellipse5={member11Props.ellipse5} />
                  <div className="member1">
                    <div className="overlap-group-1">
                      <div className="rizwhales tienne-normal-black-20px">{rizwhales1}</div>
                      <img className="ellipse-5" src={ellipse51} />
                    </div>
                    <ManageDropdownButton className={manageDropdownButton1Props.className} />
                  </div>
                  <Member1 ellipse5={member12Props.ellipse5} className={member12Props.className} />
                  <div className="member1-1">
                    <div className="overlap-group-1">
                      <div className="rizwhales tienne-normal-black-20px">{rizwhales2}</div>
                      <img className="ellipse-5" src={ellipse52} />
                    </div>
                    <ManageDropdownButton className={manageDropdownButton2Props.className} />
                  </div>
                  <div className="member1-2">
                    <div className="overlap-group-1">
                      <div className="rizwhales tienne-normal-black-20px">{rizwhales3}</div>
                      <img className="ellipse-5" src={ellipse53} />
                    </div>
                    <ManageDropdownButton className={manageDropdownButton3Props.className} />
                  </div>
                </div>
                <div className="member-container-1">
                  <div className="member1-3">
                    <div className="overlap-group-1">
                      <div className="rizwhales tienne-normal-black-20px">{rizwhales4}</div>
                      <img className="ellipse-5" src={ellipse54} />
                    </div>
                    <ManageDropdownButton className={manageDropdownButton4Props.className} />
                  </div>
                  <Member12
                    ellipse5={member121Props.ellipse5}
                    manageDropdownButtonProps={member121Props.manageDropdownButtonProps}
                  />
                  <div className="member1-4">
                    <div className="overlap-group-1">
                      <div className="rizwhales tienne-normal-black-20px">{rizwhales5}</div>
                      <img className="ellipse-5" src={ellipse55} />
                    </div>
                    <ManageDropdownButton className={manageDropdownButton5Props.className} />
                  </div>
                  <Member12
                    ellipse5={member122Props.ellipse5}
                    className={member122Props.className}
                    manageDropdownButtonProps={member122Props.manageDropdownButtonProps}
                  />
                  <div className="member1-5">
                    <div className="overlap-group-1">
                      <div className="rizwhales tienne-normal-black-20px">{rizwhales6}</div>
                      <img className="ellipse-5" src={ellipse56} />
                    </div>
                    <ManageDropdownButton className={manageDropdownButton6Props.className} />
                  </div>
                </div>
              </div>
              <img className="line-8" src={line8} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MembersListPage;
