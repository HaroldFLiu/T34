import React, {useEffect, useState}from "react";
import "./ProductInformationPage.css";
import NavBar from "../NavBarComponent";

import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';

import { AiFillTag } from "react-icons/ai";

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
  const [isSeller, setIsSeller] = useState(false);
  const [category, setCategory] = useState({});

  const fetchItems = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    axios.get(`/public/item/${productId}`)
    .then(async (res) => {
      setItems(res.data.item);
      setSeller(res.data.seller);
      if (res.data.item.seller_id == user) {
        setIsSeller(true);
      }

      if (res.data.item.category_ids) {
        //console.log("yes")
        
        await axios.get(`/category/${res.data.item.category_ids[0]}`)
        .then(res => {
          setCategory(res.data);
          //console.log(res.data.name);
        })
      }
    })
    .catch(() => {
      alert('There was an error while retrieving the data')
    })
  };

  //console.log(isSeller);
 
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
      //console.log(res);
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

  const [remove, setRemove] = useState([]);

  /* deletes an item function BUT DODGEY RELOAD TO DISPLAY  */
  async function deletePost(itemId) {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.delete(`/public/${itemId}`);
    alert('Removed item successfully');
    location.pathname="/sell-page/"+user.user_id;
    setStatus('Delete successful');
  }
 
  return (
    <div className="parent" >
      {/* top nav bar*/}
      <NavBar />

      {/* product info display*/} 
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

          {!added && !isSeller && <button className="purchase-btn" onClick={() => addToCart()}> ADD TO CART </button>}
          {added && !isSeller && <button className="purchase-btn"> IN CART ALREADY</button>}
          {isSeller && (item.sold == true) && <label className="status sold-label"> SOLD </label>}
          {isSeller && (item.sold == false) && <label className="status"> LISTED </label>}
          {isSeller && <a href="#"> <p><button className="purchase-btn" onClick={() => deletePost(item._id)}> Remove </button></p></a>}
        </div>
      </div>  
    </div>
  );
}

export default ProductInformationPage;
