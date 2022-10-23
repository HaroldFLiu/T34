import React, {useEffect, useState}from "react";
import "./ProductInformationPage.css";
import NavBar from "../NavBarComponent";

import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
const coookie = new Cookies();

import { AiFillTag } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const ProductInformationPage = () => {

  const [added, setAdded] = useState(false);

  const {productId} = useParams()
  
  const [item, setItems] = useState({});
  const [seller, setSeller] = useState({});
  const [buyer, setBuyer] = useState({});
  const [isBought, setIsBought] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [category, setCategory] = useState({});
  const [userId, setUserId] = useState(null);

  // get item information
  const fetchItems = async () => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;
    setUserId(user);

    axios.get(`/public/item/${productId}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(async (res) => {
      //console.log(res.data);
      setItems(res.data.item);
      setSeller(res.data.seller);

      // to know if user is the seller
      if (res.data.item.seller_id == user) {
        setIsSeller(true);
      }

      // since items don't have to have categories
      if (res.data.category) {
        setCategory(res.data.category);
      }

      if (res.data.buyer) {
        setBuyer(res.data.buyer);
        setIsBought(true);
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

  // get if item is in wishlist
  const [wishlist, setWishlist] = useState([])
  const fetchWishlist = async () => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.get(`/favourites/${user.user_id}`, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      setWishlist(res.data.map((x) => x._id));
    })
    .catch(() => {
      alert('There are no items in your wishlist')
    })
  }

  useEffect(() => {
    fetchWishlist();
  }, []);

  const [response, setResponse] = useState(null);

  // function to add item to wishlist if not already in wishlist
  const addWishlist = async item_id => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    setResponse(await axios.patch("/favourites/"+user.user_id+"/add/"+item_id , {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}}));

    window.location.reload();
  };

  // function to remove item from wishlist if in wishlist
  async function removeWishlist(item_id) {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    setResponse(await axios.patch("/favourites/"+user.user_id+"/remove/"+item_id , {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}}))
    
    window.location.reload();
  };

  useEffect(() => {}, [response]);
 
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
          {/* wishlist button */}
          <div className="product-wishlist">
            {/* css for heart btn in home.css */}
            {(item.seller_id != userId) && (!wishlist.includes(item._id)) && 
              <a className="wishlist" onClick={() => addWishlist(item._id)}> 
                <AiOutlineHeart className="heart-icon"/> 
              </a>}
            {(item.seller_id != userId) && (wishlist.includes(item._id)) && 
              <a className="wishlist" onClick={() => removeWishlist(item._id)}>
                <AiFillHeart className="heart-icon"/>
              </a>}

            {isSeller && (item.sold == true) && <label className="status sold-label"> SOLD </label>}
            {isSeller && (item.sold == false) && <label className="status"> LISTED </label>}
          </div>
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
          <div className="info-text-left"> <AiFillTag /><b>Categories: </b> {category.name} </div>
          {isBought && <div className="info-text-left"> <br/><b>Sold To: </b> {buyer.first_name} {buyer.last_name} 
            </div>}

          {/* different dislay depending on if you are seller or not, as well as if item is in cart or not*/}
          {!added && !isSeller && <button className="purchase-btn" onClick={() => addToCart()}> ADD TO CART </button>}
          {added && !isSeller && <button className="purchase-btn"> IN CART ALREADY</button>}
          {isSeller && <a href="#"> <p>
            <button className="purchase-btn" onClick={() => deletePost(item._id)}> Remove </button></p></a>}
        </div>
      </div>  
    </div>
  );
}

export default ProductInformationPage;
