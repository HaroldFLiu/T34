import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";
import BROWESEBYCATE from "../BROWESEBYCATE";
import SortByDropsown from "../SortByDropsown";
import "./ViewItemPage.css";

function ViewItemPage(props) {
  const {
    shop1,
    sell1,
    imageAdd,
    expandImages,
    rectangle161,
    rectangle162,
    rectangle163,
    name,
    orignalNecklaceWit,
    price,
    place1,
    contactSeller,
    line5,
    line6,
    line1,
    place2,
    shop2,
    sell2,
    groups,
    wishlist,
    line2,
    sellerIamaniceguy,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="view-item-page screen" name="form25" action="form25" method="post">
        <div className="top-bar-8">
          <div className="rectangle-22-6"></div>
          <SearchInput />
          <SearchButton />
          <div className="overlap-group2-7">
            <div className="shop-12 tienne-bold-black-16px">{shop1}</div>
            <Link to="/new-item-listing-page">
              <div className="sell-12 tienne-bold-black-16px">{sell1}</div>
            </Link>
          </div>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className="overlap-group3-2">
          <div className="product-dispay">
            <div className="image-add-3" style={{ backgroundImage: `url(${imageAdd})` }}>
              <img className="expand-images" src={expandImages} />
            </div>
            <div className="image-add-4">
              <img className="rectangle-16-2" src={rectangle161} />
              <img className="rectangle-16-3" src={rectangle162} />
              <img className="rectangle-16-4" src={rectangle163} />
            </div>
          </div>
          <div className="prouct-information">
            <div className="name tienne-normal-black-30px">{name}</div>
            <div className="prouct-information-1">
              <div className="orignal-necklace-wit tienne-normal-black-20px">{orignalNecklaceWit}</div>
              <div className="price-1 tienne-bold-black-32px">{price}</div>
              <div className="purchase-button">
                <div className="overlap-group1-8">
                  <div className="place-6">{place1}</div>
                </div>
              </div>
              <div className="message-button">
                <div className="overlap-group-18">
                  <div className="contact-seller tienne-bold-black-32px">{contactSeller}</div>
                </div>
              </div>
            </div>
          </div>
          <img className="line-5" src={line5} />
          <img className="line-6" src={line6} />
          <div className="divider-bar-6">
            <img className="line-1-6" src={line1} />
            <div className="flex-row-6">
              <Link to="/home-page">
                <div className="place-7 tienne-bold-black-24px">{place2}</div>
              </Link>
              <div className="shop-13 tienne-bold-black-24px">{shop2}</div>
              <a href="javascript:SubmitForm('form25')">
                <div className="sell-13 tienne-bold-black-24px">{sell2}</div>
              </a>
              <a href="javascript:SubmitForm('form25')">
                <div className="groups-6 tienne-bold-black-24px">{groups}</div>
              </a>
              <a href="javascript:SubmitForm('form25')">
                <div className="wishlist-6 tienne-bold-black-24px">{wishlist}</div>
              </a>
              <BROWESEBYCATE />
            </div>
            <img className="line-2-6" src={line2} />
          </div>
        </div>
        <div className="seller-i-am-a-nice-guy tienne-bold-black-24px">{sellerIamaniceguy}</div>
      </form>
    </div>
  );
}

export default ViewItemPage;
