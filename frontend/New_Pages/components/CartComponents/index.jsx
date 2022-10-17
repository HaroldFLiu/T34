import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import Cookie from 'universal-cookie';
/* icon imports */
// need to get -> userId -> cartId -> items (itemId) : then within can get details
const CartComponents = () => {

    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState([]);
    const [items, setItems] = useState([]);
    var coookie = new Cookie();

    // Define the function that fetches the data from API 
    const fetchData = async () => {
      // NEED TO CHANGE OBJ ID 
      const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
      const userId = server_res.data.user_id;
     //console.log(userId);
      //console.log(await axios.get("/cart/"+userId, {withCredentials:true, headers:{'Authorization':coookie.get("token")}}));
      let res = await axios.get("/cart/"+userId, {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
      let items = res.data.items;
      let subtotal = res.data.subtotal;
      console.log(res);
      setPosts(items);
      setTotal(subtotal);
      var iteminfo = []
      items.forEach( async element => {
        let { data } = await axios.get(`/public/item/${element}`);
        iteminfo.push(data);
      });
      setItems(iteminfo);
      console.log(iteminfo);

    };
  
    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
      fetchData();
    }, []);


  return (
  <div className="parent" >
    {items.forEach((item) => {

    {/* products display*/} 
    <div class="checkout-main">
         {/* items showcase here for checkout*/}
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
        {/*
        <div>
          {item}
        </div>
    */}

        </div>
    
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
  })}
</div>
  );
}

export default CartComponents;
