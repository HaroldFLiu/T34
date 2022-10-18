import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import Cookies from 'universal-cookie';

const coookie = new Cookies();
/* icon imports */
// need to get -> userId -> cartId -> items (itemId) : then within can get details

const CartComponents = ({data}) => {
  //console.log("cart component");
  //console.log(data);

  async function removeCart(item_id) {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    const user = server_res.data;
    var res = await axios.patch("/cart/remove/"+user.user_id+"/"+item_id , {withCredentials:true, headers:{'Authorization':coookie.get("token")}});

    };



  <div className="parent" >
  {data.map((item) => {
            <div className="checkout-items-card">
        
            <div className="wrapper-check" >
              <div class="row-check">
                <div class="column-check">
                  <div class="card-check">
                    <div className="img-wrap-check"> <img src={item.image_urls} className="logo-position"></img> </div>
                    <div className="check-texts">
                      {item.name} 
                      <br/>
                      <b> {item.price} </b>
                  </div>  
                  <button className="check-remove-btn"> Remove</button>
                  </div>
                </div>
                
              </div>
  
          </div>
          </div>
  })}
  </div>

  return (
    <div className="parent">  
    {data.map((item) => {
      return(
        <div className="checkout-items-card">  
        {/* products display 1st row*/} 
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
