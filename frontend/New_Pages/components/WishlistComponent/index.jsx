import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import {Link} from "react-router-dom"
import Cookies from 'universal-cookie';

const coookie = new Cookies();
const WishlistComponent = ({data}) => {

  /* deletes an item function BUT DODGEY RELOAD TO DISPLAY  */

  // /favourites/:userId/remove/:itemId
/* deletes an item function BUT DODGEY RELOAD TO DISPLAY  */
async function removeWishlist(item_id) {
  const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
  console.log(server_res);
  const user = server_res.data;
  await axios.patch("/favourites/"+user.user_id+"/remove/"+item_id , {}, {withCredentials:true, headers:{'Authorization':coookie.get("token")}}).then(
    window.location.reload()
  );
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
      
            </div>
            <div className="space"> </div>
            <div className="content-posts">
            <p class="price"> ${item.price}</p>
          </div> </Link>
            <div className="item-cart">
            <div className="no-wrap"> <h5>{item.name}</h5></div>
            
            <a href="#"> <p><button  onClick={() => removeWishlist(item._id)}>Remove from Wishlist</button></p></a>
        
            {/* use this to link to inidivdual product info*/}
            </div>
            {/* closing tag here BELOW */}
           
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

export default WishlistComponent;