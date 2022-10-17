import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState, useMemo}from "react";
import axios from "../../api/axios";
import {Link} from "react-router-dom"

const ProductComponents = ({data}) => {

//router.patch('/favourites/:userId/add/:itemId', addtoFavourite);

  const addWishlist = async (item_id) => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    const user = server_res.data;
    await axios.patch(`favourites/${user.user_id}/add/${item_id}`).then(setAdded(true)).catch(error => {
      console.log("Error updating cart", error);
    });
  };


return(
    <div className="products-wrapper">  
    {data.map((item) => {
      return(
        <div className="products-wrapper-test">  
        {/* products display 1st row*/} 
        <div className="wrapper" >
        <div class="row2">
          <div class="column">
          <div class="card">
            {/*  add href to product page TO LINK TO OBJECT_ID*/}
            <Link to={`/product-page/${item._id}`}>
            <div className="img-wrap"> 
             <img src={item.image_urls[0]} className="logo-position">
              </img> 
            </div></Link>
             {/* wishlist button */}
             <div class="wishlist">
              <button> wishlist </button>
            </div>
            <Link to={`/product-page/${item._id}`}>
            <div className="content-posts">
            <p class="price"> ${item.price}</p>
          </div>
            <div className="item-cart">
            <h3>{item.name}</h3>
            <a href="#"> <p><button onClick={() => addWishlist(item._id)}>Add to Cart</button></p></a>
        
            {/* use this to link to inidivdual product info*/}
            </div>
            {/* closing tag here BELOW */}
            </Link>
          </div>
          </div>   
          
        </div>
        </div>
    
    
        </div>  
      )
      
    })}

    </div>  
      
);
}

export default ProductComponents;