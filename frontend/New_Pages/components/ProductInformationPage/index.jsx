import React, {useEffect, useState}from "react";
import "./ProductInformationPage.css";
import NavBar from "../NavBarComponent";

import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import { MdStackedLineChart } from "react-icons/md";

const coookie = new Cookies();
const ProductInformationPage = () => {

  const [added, setAdded] = useState(false);

  {/* TO GET SINGLE ITEM NEED CONDITION TO ACCESS CLICKED ITEMS'S ID*/}
  const {productId} = useParams()
  //const thisProduct = posts.find(prod => prod.id == productId)
  {/*degub log here */}
  //console.log(productId);

  {/*fetch item data*/}
  
  const [item, setItems] = useState({});
  const [seller, setSeller] = useState({});

  const fetchItems = async () => {
    axios.get(`/public/item/${productId}`)
    .then(res => {
      //console.log(res.data);
      setItems(res.data.item);
      //console.log(item);
      setSeller(res.data.seller);
      //console.log(seller);
    })
    .catch(() => {
      alert('There was an error while retrieving the data')
    })
  };
 
  useEffect(() => {
    fetchItems();
    checkCart();
  }, []);

  const checkCart = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    await axios.get(`/cart/${user}`)
    .then(res => {
      const cart = res.data.cart;
      console.log(res);
      if (cart.items.includes(productId)) {
        setAdded(true);
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }

  const addToCart = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    //console.log(server_res);
    //const user = server_res.data.user_email;
    const user = server_res.data;

    //let res = await axios.get("/cart/"+user.user_id, {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    //let items = res.data.items;
    //items.push(productId);
    await axios.patch("/cart/"+user.user_id+"/add/"+productId, {itemId:productId}, {withCredentials:true, headers:{'Authorization':coookie.get("token")}}).then(setAdded(true)).catch(error => {
      console.log("Error updating cart", error);
    });
  };

 
  return (
    <div className="parent" >
      {/* top nav bar*/}
      <NavBar />

      {/* product info display*/} 
      <div class="product-info-wrap">     
        <div className="product-img-wrap">
          <div className="imgtest"> <img src={item.image_urls} className="square-detailed"></img>  </div> 
        </div> 

        <div className="more-info-wrap">
          <div className="item-name-label"> {item.name}</div>
          <div className="info-text"> <b>Seller:</b> {seller.first_name} {seller.last_name}</div> 
          <hr />
          <br/>
          <div className="item-descip-wrap">
            <div className="info-text-centered"> Item Description: <p> {item.description}</p></div>
          </div> 
          <br/>
          <div className="info-text-centered-price"> <b>${item.price}</b></div>
          <hr />

          {!added && <button className="purchase-btn" button onClick={() => addToCart()}> ADD TO CART </button>}
          {added && <button className="purchase-btn" button> IN CART ALREADY</button>}
        </div>
      </div>  
    </div>
  );
}

export default ProductInformationPage;
