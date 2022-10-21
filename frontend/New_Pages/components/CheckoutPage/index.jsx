import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./CheckoutPage.css";

import CartComponents from "../CartComponents"
import NavBar from "../NavBarComponent"
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';

const coookie = new Cookies();
const CheckoutPage = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});
  const [firstRender, setFirstRender] = useState(false);

  const {userId} = useParams();

  // function that fetches the user's cart
  const fetchData = async () => {
    axios.get("/cart/"+ userId, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      let tmp = res.data;
      //console.log(res);
      setItems(tmp.items);
      setCart(tmp.cart);
      console.log(items);
      //console.log(cart);
      setFirstRender(true);
    })
  };

  // function that checks out user's cart
  const checkoutCart = async () => {
    await axios.patch("/cart/checkout/"+userId, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}}).then(
      window.location.reload()
    ).catch(error => {
      console.log("Error updating cart", error);
    });
  };

  // trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, [firstRender]);

  return (
    <div className="parent" >
      {/* top nav bar*/}
      <NavBar />

      {/* products display*/} 
      <div class="checkout-main">

      <div className="text-outline-bag">  <div className="check-header"> YOUR BAG</div> </div> 
        <br/>
        <div className="total-items"> TOTAL ({items.length} items) <b> ${cart.subtotal}</b> </div>
        <br/>
        <div className="total-items"> Items inside your bag are not reserved - check out now to make them yours! </div>
        <hr/>

        {/* payment method here*/}
        <div className="payment-detail">
          <div className="text-outline"> <h1>ORDER SUMMARY </h1></div>
          <br/>

          {items.map((item) => {
            <div className="payment-detail-text"> ${item.price}</div> 
          })}

          <hr/>

          <b>TOTAL</b>
          <div className="payment-detail-text">${cart.subtotal}</div> 
          <br/>
          <button className="checkout-btn" onClick={() => checkoutCart()}> <b> CHECKOUT</b></button>
        </div>
      </div> 

      <CartComponents data={items}/>
      
    </div>
  );
}

export default CheckoutPage;
