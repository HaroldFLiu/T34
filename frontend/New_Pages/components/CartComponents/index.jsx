import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
/* icon imports */

const CartComponents = () => {

    const [posts, setPosts] = useState([]);

    // Define the function that fetches the data from API
    const fetchData = async () => {
      const { data } = await axios.get("/:cartId");
      setPosts(data);
    };
  
    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
      fetchData();
    }, []);

    console.log(posts);

  return (
  <div className="parent" >

    {/* products display*/} 
    <div class="checkout-main">
         {/* items showcase here for checkout*/}
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

        </div>
        </div>


    </div> 

  </div>

  );
}

export default CartComponents;
