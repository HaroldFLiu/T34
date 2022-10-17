import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./CheckoutPage.css";

import CartComponents from "../CartComponents"
import NavBar from "../NavBarComponent"

const CheckoutPage = () => {


  return (
  <div className="parent" >
     {/* top nav bar*/}
    <NavBar />

  
    {/* products display*/} 
    <div class="checkout-main">

        <div className="check-header"> YOUR BAG</div> 
        <br/>
        <div className="total-items"> TOTAL (3 items) <b> $42.60 </b> </div>
        <br/>
        <div className="total-items"> Items inside your bag are not reserved - check out now to make them yours! </div>
        <hr/>

          {/* payment method here*/}
            <div className="payment-detail">
                <h1>ORDER SUMMARY </h1>
                <br/>
                2 items:
                <div className="payment-detail-text"> $42.60</div> 
                <hr/>
             
                <b>TOTAL</b>
                <div className="payment-detail-text"> $42.60</div> 
                <br/>
                <button className="checkout-btn"> <b> CHECKOUT</b></button>
            </div>
            <CartComponents/>
          {/* Cart components to be put here SEE ABOVE}
         
         {/* items showcase here for checkout
        <div className="checkout-items-card">
          
          <div className="wrapper-check" >
            <div class="row-check">
              <div class="column-check">
                <div class="card-check">
                  <div className="img-wrap-check"> <img src={logo} className="logo-position"></img> </div>
                  <div className="check-texts">
                    A COOL ITEM HERE
                    <br/>
                    <b> $14.20 </b>
                </div>  
                <button className="check-remove-btn"> Remove</button>
                </div>
              </div>
              
            </div>

            <div class="row-check">
              <div class="column-check">
                <div class="card-check">
                  <div className="img-wrap-check"> <img src={logo} className="logo-position"></img> </div>
                  <div className="check-texts">
                    A COOL ITEM HERE
                    <br/>
                    <b> $14.20 </b>
                </div>  
           
                <button className="check-remove-btn"> Remove</button>
                </div>
              </div>
         
            </div>
            <div class="row-check">
              <div class="column-check">
                <div class="card-check">
                  <div className="img-wrap-check"> <img src={logo} className="logo-position"></img> </div>
                  <div className="check-texts">
                    A COOL ITEM HERE
                    <br/>
                    <b> $14.20 </b>
                </div>  
           
                <button className="check-remove-btn"> Remove</button>
                </div>
              </div>
              
            </div>
        </div>
        </div>*/}


    </div> 


  </div>

  );
}

export default CheckoutPage;
