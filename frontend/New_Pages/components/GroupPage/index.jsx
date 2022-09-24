import React from "react";
import logo from "../../dist/t34-logo.jpg";
import axios from "../../api/axios";


const GroupPage = () => {

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
      <a href="/home-page">Home</a>
      <a href="/sell-page">Sell</a>
      <a class="active" href="/group-page">Groups</a>
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

export default GroupPage;
