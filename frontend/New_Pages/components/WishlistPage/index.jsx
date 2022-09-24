import React from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";


const WishlistPage = () => {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("/item").then((response) => {
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
        <a href="#home">Groups</a>
        <a class="active" href="/wishlist-page">Wishlist</a>
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
    <a href="/new-listings-page" >
      <button class="btn btn-success"> Create New Listing</button>
    </a>
  </div>
  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> My Wishlist:</div>
      <hr />
      <div className="number-listings"> 1234 listings 
      
          {/* sort by button drop down*/} 
    <div className="move-drop-btn">
      <div class="dropdown">
                <button class="dropbtn">Sort by:</button>
                <div class="dropdown-content">
                    <a href="#">Price: High-Low</a>
                    <a href="#">Price: Low-High</a>       
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
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        {/* spacer instead of wishlist btn*/}
        &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
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
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Add to Cart</button></p>
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
      <a href="#" class="active">2</a>
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

export default WishlistPage;
