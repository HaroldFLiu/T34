import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import Cookies from 'universal-cookie';

const coookie = new Cookies();

const CartComponents = ({data}) => {

  // function to remove a single item from a user's cart
  async function removeCart(item_id) {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    const user = server_res.data;
    await axios.patch("/cart/remove/"+user.user_id+"/"+item_id , {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}}).then(
      window.location.reload()
    );
  };

  return (
    <div className="parent">  
    {data.map((item) => {
      return(
        <div className="checkout-items-card">  
        {/* products display */} 
        <div className="wrapper-check" >
        <div class="row-check">
          <div class="column-check">
          <div class="card-check">
          <div className="img-wrap-check"> 
            <img src={item.image_urls} className="logo-position"></img> 
          </div>
          <div className="check-texts">
            {item.name} 
            <br/>
            <b> ${item.price} </b>
          </div>  
          <button className="check-remove-btn" onClick={() => removeCart(item._id)}> Remove</button>
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

export default CartComponents;
