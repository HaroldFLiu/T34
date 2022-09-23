import React, { useState } from "react";
import "./NewListings.css";
import axios from "../../api/axios";

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
      <a href="#home">Log Out</a>
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
    <div class="container">
        <form className="publish-form">
            <label for="item-name"> Item Name:</label>
            <input type="text">  
            </input>
            <label for="enter-price"> Price:</label>
            <input type="text">  
            </input>
            <label for="enter-desc"> Item Description:</label>
            <input type="text">  
            </input>

            
            <div class="dropdown">
                <button class="dropbtn">Category</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
        </div>

        <div class="dropdown">
                <button class="dropbtn">Privacy</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
        </div>

        <div class="dropdown">
                <button class="dropbtn">Group Select (if applicable)</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
        </div>

            

        </form>
        
    </div>
</div>
    
   
  );
}

export default NewListingPage;