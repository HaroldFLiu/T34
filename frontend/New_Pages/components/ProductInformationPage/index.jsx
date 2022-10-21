import React, {useEffect, useState}from "react";
import "./ProductInformationPage.css";
import NavBar from "../NavBarComponent";

import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
const coookie = new Cookies();

import { AiFillTag } from "react-icons/ai";

const ProductInformationPage = () => {

  const [added, setAdded] = useState(false);

  const {productId} = useParams()
  
  const [item, setItems] = useState({});
  const [seller, setSeller] = useState({});
  const [isSeller, setIsSeller] = useState(false);
  const [category, setCategory] = useState({});

  // get item information
  const fetchItems = async () => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    axios.get(`/public/item/${productId}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(async (res) => {
      setItems(res.data.item);
      setSeller(res.data.seller);

      // to know if user is the seller
      if (res.data.item.seller_id == user) {
        setIsSeller(true);
      }

      // since items don't have to have categories
      if (res.data.item.category_ids) {
        await axios.get(`/category/${res.data.item.category_ids[0]}`, 
          {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
        .then(res => {
          setCategory(res.data);
        })
      }
    })
    .catch(() => {
      alert('There was an error while retrieving the data')
    })
  };
 
  useEffect(() => {
    fetchItems();
    checkCart();
  }, []);

  // function to check if item is in user's cart
  const checkCart = async () => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    await axios.get(`/cart/${user}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      const cart = res.data.cart;
      if (cart.items.includes(productId)) {
        setAdded(true);
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }

  // function to add item to cart, if not in cart 
  const addToCart = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, 
      headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.patch("/cart/"+user.user_id+"/add/"+productId, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}}).then(setAdded(true)).catch(error => {
      console.log("Error updating cart", error);
    });
  };

  const [remove, setRemove] = useState([]);

  // function to delete post if user is seller
  async function deletePost(itemId) {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.delete(`/public/${itemId}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    alert('Removed item successfully');
    location.pathname="/sell-page/"+user.user_id;
  }
 
  return (
    <div className="parent" >
      {/* top nav bar */}
      <NavBar />

      {/* product info display */} 
      <div className="product-info-wrap">     
        <div className="product-img-wrap">
          <div className="imgtest"> <img src={item.image_urls} className="square-detailed"></img>  </div> 
        </div> 

        <div className="more-info-wrap">
          <div className="item-name-label"> {item.name}</div>
          <div className="info-text"> <b>Seller:</b> {seller.first_name} {seller.last_name}</div> 
          <hr />
          <br/>
          <div className="item-descip-wrap">
            <div className="info-text-centered"> <b>Item Description:</b> 
              <p> {item.description}</p>
            </div>
            <br />
          </div> 
          <br/>
          <div className="info-text-centered-price"> <b>${item.price}</b></div>
          <hr />
          <div className="info-text-left"> <AiFillTag /><b>Tags: </b> {category.name} </div>

          {/* different dislay depending on if you are seller or not, as well as if item is in cart or not*/}
          {!added && !isSeller && <button className="purchase-btn" onClick={() => addToCart()}> ADD TO CART </button>}
          {added && !isSeller && <button className="purchase-btn"> IN CART ALREADY</button>}
          {isSeller && (item.sold == true) && <label className="status sold-label"> SOLD </label>}
          {isSeller && (item.sold == false) && <label className="status"> LISTED </label>}
          {isSeller && <a href="#"> <p>
            <button className="purchase-btn" onClick={() => deletePost(item._id)}> Remove </button></p></a>}
        </div>
      </div>  
    </div>
  );
}

export default ProductInformationPage;
