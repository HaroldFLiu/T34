import React from "react";
import "./HomePage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";


const HomePage = () => {

  return (
  <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
        <a class="active" href="#home">Home</a>
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

    {/* side bar*/} 
    <div class="sidenav">
    <a href="#">Categories</a>
    <a href="#">Vechicles</a>
    <a href="#">Apparel</a>
    <a href="#">Electronics</a>
    <a href="#">Family</a>
    <a href="#">Garden & Outdoor</a>
    <a href="#">Hobbies</a>
    <a href="#">Home Goods</a>
    <a href="#">Home Improvement Supplies</a>
    <a href="#">Musical Instruments</a>
    <a href="#">Office Supplies</a>
    <a href="#">Pet Supplies</a>
    <a href="#">Sporting Goods</a>
    <a href="#">Toys & Games</a>
    <button > Create New Listing</button>
    
  </div>
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> Today's Listings:</div>
    <div className="products-wrapper">  
    {/* products display 1st row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
    </div>
    </div>

    {/* products display 2nd row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        <p class="price">PRICE HERE</p>
        <h1>Item Name</h1>
        <p><button>Add to Cart</button></p>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div> 


  </div>

  );
}

export default HomePage;
