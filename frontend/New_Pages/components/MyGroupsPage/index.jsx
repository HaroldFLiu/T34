import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./MyGroupsPage.css";

import NavBar from "../NavBarComponent"

const GroupPage = () => {

  return (
<div className="parent" >
  <NavBar />

    {/* side bar*/} 
    <div class="new">
      <a href="/create-group-page" >
        <button class="btn btn-success"> Create New Group</button>
      </a>
    </div>
  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> My Groups:</div>
      <hr />
      <div className="number-listings"> 1234, 5678 groups 
      
          {/* sort by button drop down*/} 
    <div className="move-drop-btn">
      <div class="dropdown">
                <button class="dropbtn">Sort by: Default</button>
                <div class="dropdown-content">
                    <a href="#">Members: High-Low</a>
                    <a href="#">Members: Low-High</a>       
                </div>
        </div>
      </div> 
      </div> 
      <hr />
    <div className="products-wrapper">  
    {/* products display 1st row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        {/* spacer instead of wishlist btn*/}
        &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        {/* spacer instead of wishlist btn*/}
        &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
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
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
    </div>
   
    </div>
    </div>
    {/* next page bar here*/}
    <div class="center-next">
      <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
    </div> 


  </div>
  );
}

export default GroupPage;
