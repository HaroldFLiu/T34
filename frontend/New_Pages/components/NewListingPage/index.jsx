import React, { useState } from "react";
import "./NewListings.css";
import axios from "../../api/axios";
import logo from "../../dist/img/t34-logo.jpg";

const NewListingPage = () => {

    const [values, setValues] = useState({
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        itemCategory: "",
        itemGroup: "",
        itemVisbility: "",

      });

    const PostNewListing =  event =>{
    event.preventDefault();
    axios.post('/public', {
        name: values.itemName,
        description: values.itemDescription,
        price: values.itemPrice,
        category_ids: values.itemCategory,
        group_ids: values.itemGroup,
        public_visibility: values.itemVisbility,
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    }
    console.log(values);

    return (
    <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page">Home</a>
        <a class="active" href="/sell-page">Sell</a>
        <a href="#home">Groups</a>
        <a href="/wishlist-page">Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="/login-page">Log In</a>
      <a href="/sign-up-page">Register</a>
      <input type="text" placeholder="Search.."> 
      </input>
      </div>
    </div>
        
    <div class="listings-main">
      <div className="home-title"> List an item,<a> and start selling right away!</a></div>
      
    </div>
    <hr />
    <div className="number-listings"> 1234 items sold in the last 24 hours!
    
    {/* on click to submit new listing here*/}

    <button className="publish-btn" onClick={PostNewListing}> Publish Item</button>
    </div>
    <hr />
       {/*Upload Image box and button*/}    
    <div class="left-box">
        <div className="square-pic"></div>
        <button> Upload Image</button>
    </div>
    
    {/* form to input new listing data*/}
    <div class="container">
        <form className="publish-form">
            
            {/* onChange event here to get data */}
            
            <label for="item-name"> Item Name:</label>
            <input type="listing-text"
                onChange={(e)=> setValues({...values, itemName:e.target.value})} 
             />
            <label for="enter-price"> Price:</label>
            <input type="listing-text"
              onChange={(e)=> setValues({...values, itemPrice:e.target.value})} 
            />
            <label for="enter-desc"> Item Description:</label>
            <input type="asd" 
                onChange={(e)=> setValues({...values, itemDescription:e.target.value})} 
            />
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