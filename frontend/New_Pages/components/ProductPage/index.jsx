import React from "react";
import "./ProductPage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";


const ProductPage = () => {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("/item").then((response) => {
      setPost(response.data);
    });
  }, []);


  return (
    <div className="parent">
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
      <a class="active" href="/home-page">Home</a>
      <a href="/sell-page">Sell</a>
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
  <div class="main-product-wrap">
    1321312    
    </div>
    </div>

  );
}

export default ProductPage;
