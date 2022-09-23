import React, { useState } from "react";
import "./NewListings.css";
import axios from "../../api/axios";
import logo from "../../dist/img/t34-logo.jpg";

const NewListingPage = () => {

    return (
    <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
        <a class="active" href="/home-page">Home</a>
        <a href="#home">Sell</a>
        <a href="#home">Groups</a>
        <a href="#home">Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="#home">Log In</a>
      <a href="#home">UserName</a>
      <input type="text" placeholder="Search.."> 
      </input>
      </div>
    </div>
        
    <div class="listings-main">
      <div className="home-title"> List an item,<a> and start selling right away!</a></div>
      
    </div>
    <hr />
    <div className="number-listings"> 1234 items sold in the last 24 hours!
    <button className="publish-btn"> Publish Item</button>
    </div>
    <hr />

    <div class="left-box">
        <div className="square-pic"></div>
        <button> Upload Image</button>
    </div>
    
      
    <div class="container">
        <form className="publish-form">
            <label for="item-name"> Item Name:</label>
            <input type="listing-text">  
            </input>
            <label for="enter-price"> Price:</label>
            <input type="listing-text">  
            </input>
            <label for="enter-desc"> Item Description:</label>
            <input type="listing-text">  
            </input>
        
            <div class="dropdown">
                <button class="dropbtn">Category</button>
                <div class="dropdown-content">
                    <a href="#">Vechicles</a>
                    <a href="#">Apparel</a>
                    <a href="#">Electronics</a>
                    <a href="#">Family</a>
                    <a href="#">Garden & Outdoor</a>
                    <a href="#">Hobbies</a>
                    <a href="#">Home Goods</a>
                    <a href="#">Electronics</a>
                    <a href="#">Electronics</a>
                    <a href="#">Home Improvement Supplies</a>
                    <a href="#">Musical Instruments</a>
                    <a href="#">Office Supplies</a>
                    <a href="#">Pet Supplies</a>
                    <a href="#">Sporting Goods</a>
                    <a href="#">Toys & Games</a>
                </div>
        </div>

        <div class="dropdown">
                <button class="dropbtn">Privacy</button>
                <div class="dropdown-content">
                    <a href="#">Public</a>
                    <a href="#">Private</a>       
                </div>
        </div>

        <div class="dropdown">
                <button class="dropbtn">Group Select (if applicable)</button>
                <div class="dropdown-content">
                    <a href="#">Display Groups you are in</a>
                    <a href="#">Display Groups you are in</a>
                    <a href="#">Display Groups you are in</a>
                </div>
        </div>
    </form> 
    </div>
       
</div>
    
   
  );
}

export default NewListingPage;