import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./CheckoutPage.css";
/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';


const CheckoutPage = () => {


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
      <a class="active" href="/checkout-page"> Cart</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>

  
    {/* products display*/} 
    <div class="checkout-main">

        <div className="check-header"> YOUR BAG</div> 
        <br/>
        <div className="total-items"> TOTAL (2 items) <b> $69.96 </b> </div>
        <br/>
        <div className="total-items"> Items inside your bag are not reserved - check out now to make them yours! </div>
        <hr/>

        {/* items showcase here*/}

        <div className="checkout-items-card">
          
          <div className="wrapper-check" >
    <div class="row2">
      <div class="column">
      <div class="card-check">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
     
        
      
      </div>
    
      </div>
      </div>
      </div>{/*
            <div className="check-square">
                <div className="check-square-in"></div>
            </div>*/}
        </div>
    </div> 


  </div>

  );
}

export default CheckoutPage;
