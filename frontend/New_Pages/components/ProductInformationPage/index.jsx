import React, {useEffect, useState}from "react";
import "./ProductInformationPage.css";
/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
const ProductInformationPage = () => {

  return (
<div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
      <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <a href="/sell-page"> <HiOutlineShoppingBag className="icon"/> Sell</a>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-groups-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="/login-page"> <AiOutlineLock className="icon"/> Log In</a>
      <a href="/sign-up-page"><RiBookOpenLine className="icon" /> Register</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>
  
    {/* product info display*/} 
    <div class="product-info-wrap">


      <div className="more-info-wrap">
      <div className="item-name-label"> Item Name Here </div>
      <div className="info-text"> <b>Seller:</b> Seller Name Here</div> 
      
      <hr />
      <br/>
      <div className="item-descip-wrap">
      <div className="info-text-centered"> Item Description: <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div> 
        
      <br/>
      <div className="info-text-centered-price"> <b>$123</b></div>
      <hr />

      <button className="purchase-btn"> PURCHASE </button>
      <button className="contact-btn"> CONTACT SELLER </button>

      </div>
      <div className="product-img-wrap">
        <div class="square">
          {/* put img src here later*/} 
        </div>
        {/* other pictures display gallery*/} 
          <div class="row">
            <div class="column">
            <img src={uploadPlaceholder} className="img-gallery"></img> 
            <img src={uploadPlaceholder} className="img-gallery"></img> 
            <img src={uploadPlaceholder} className="img-gallery"></img> 
            </div>
           </div>

      </div>


    </div> 


  </div>

  );
}

export default ProductInformationPage;
