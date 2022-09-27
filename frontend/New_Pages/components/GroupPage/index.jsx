import React from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./GroupPage.css";

const GroupPage = () => {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("/public").then((response) => {
      setPost(response.data);
    });
  }, []);


  return (
<div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
      <h1 className="website-title"> Market34</h1>
        <a href="/home-page">Home</a>
        <a href="/sell-page">Sell</a>
        <a class="active" href="/group-page">Groups</a>
        <a href="#"> My Groups</a>
        <a href="/wishlist-page">Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="/login-page">Log In</a>
      <a href="/sign-up-page">Register</a>
      <input type="text" placeholder="Search.."> 
      </input>
      </div>
    </div>

    {/* side bar*/} 
   
    <div class="sidenav">
    <div className="header">
    Categories
    </div>
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
    
    <a href="/create-group-page" >
      <button class="btn btn-success"> Create New Group</button>
    </a>
  </div>
  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> Suggested Groups:</div>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
        <p><button>Join Group</button></p>
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
