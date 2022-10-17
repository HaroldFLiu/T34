import React, {useEffect, useState}from "react";
import "./ProductInformationPage.css";
import NavBar from "../NavBarComponent";

import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';

const coookie = new Cookies();
const ProductInformationPage = () => {

  const [posts, setPosts] = useState([]);
  const [added, setAdded] = useState(false);
  const [itemId, setItemId] = useState();


  const fetchData = async () => {
    const { data } = await axios.get("/public");
    setPosts(data);
  };

 
  useEffect(() => {
    fetchData();
  }, []);
  

  {/* TO GET SINGLE ITEM NEED CONDITION TO ACCESS CLICKED ITEMS'S ID*/}
  const {productId} = useParams()
  //const thisProduct = posts.find(prod => prod.id == productId)
  {/*degub log here */}
  //console.log(productId);

  {/*fetch item data*/}
  
  const [items, setItems] = useState([]);


  const fetchItems = async () => {
    const { data } = await axios.get(`/public/item/${productId}`);
    setItems(data);
  };

 
  useEffect(() => {
    fetchItems();
  }, []);
  
  console.log(items.image_urls);

  const addToCart = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
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
  {/*
{thisProduct.map((item) => {
      return(  
      <>123 </> )
      
    })}*/}
     {/* top nav bar*/}
<NavBar />
  
    {/* product info display*/} 

<div class="product-info-wrap">     
    <div className="product-img-wrap">
   <div className="imgtest"> <img src={items.image_urls} className="square-detailed"></img>  </div>  
        {/* other pictures display gallery
          <div class="row">
            <div class="column">
            <img src={uploadPlaceholder} className="img-gallery"></img> 
            <img src={uploadPlaceholder} className="img-gallery"></img> 
            <img src={uploadPlaceholder} className="img-gallery"></img> 
            </div>
           </div>*/} 

      </div>

      <div className="more-info-wrap">
      <div className="item-name-label"> {items.name}</div>
      <div className="info-text"> <b>Seller:</b> {items.seller_id}</div> 
      
      <hr />
      <br/>
      <div className="item-descip-wrap">
      <div className="info-text-centered"> Item Description: <p> {items.description}</p></div>
        </div> 
        
      <br/>
      <div className="info-text-centered-price"> <b>${items.price}</b></div>
      <hr />

      {!added && <button className="purchase-btn" button onClick={() => addToCart()}> ADD TO CART </button>}
      {added && <button className="purchase-btn" button> IN CART ALREADY</button>}
      {/*<button className="contact-btn"> CONTACT SELLER </button>*/}

      </div>

      </div>  
      
      
      
      
  


  </div>

  );
}

export default ProductInformationPage;
