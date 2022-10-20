import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState, useMemo}from "react";
import axios from "../../api/axios";
import {Link} from "react-router-dom"
import Cookies from 'universal-cookie';
import { FaHeart } from "react-icons/fa";

const coookie = new Cookies();
const ProductComponents = ({data, userId}) => {
  const [wishlist, setWishlist] = useState([])
  const fetchWishlist = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.get(`/favourites/${user.user_id}`)
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

//router.patch('/favourites/:userId/add/:itemId', addtoFavourite);
const [added, setAdded] = useState(false);

const addWishlist = async item_id => {
  const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
  //console.log(server_res);
  //const user = server_res.data.user_email;
  const user = server_res.data;

  //let res = await axios.get("/cart/"+user.user_id, {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
  //let items = res.data.items;
  //items.push(productId);
  await axios.patch("/favourites/"+user.user_id+"/add/"+item_id , {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
  .then(window.location.reload())
};

async function removeWishlist(item_id) {
  const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
  console.log(server_res);
  const user = server_res.data;
  await axios.patch("/favourites/"+user.user_id+"/remove/"+item_id , {withCredentials:true, headers:{'Authorization':coookie.get("token")}}).then(
    window.location.reload()
  );
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

return(
    <div className="products-wrapper">  
    {data.map((item) => {
      return(
        <div className="products-wrapper-test">  
        {/* products display 1st row*/} 
        <div className="wrapper" >
        <div class="row2">
          <div class="column">
          <div class="card">
            {/*  add href to product page TO LINK TO OBJECT_ID*/}
            <div className="img-wrap"> 
             <img src={item.image_urls[0]} className="logo-position">
              </img> 
            </div>
             {/* wishlist button */}
             <div class="wishlist">
              {/* css for heart btn in home.css */}
             {(item.seller_id != userId) && (!wishlist.includes(item._id)) && <button onClick={() => addWishlist(item._id)}> <FaHeart className="heart-icon"/> </button>}
             {(item.seller_id != userId) && (wishlist.includes(item._id)) && <button onClick={() => removeWishlist(item._id)}> <FaHeart className="heart-icon-clicked"/>  </button>}
             {(item.seller_id == userId) && <br></br>}
            </div>
            <div className="content-posts">
            <p class="price"> ${item.price}</p>
          </div>
            <div className="item-cart">
            <h5>{item.name}</h5>
            <Link to={`/product-page/${item._id}`}> <a href="#"> <p><button>See More</button></p></a>
            </Link>
            {/* use this to link to inidivdual product info*/}
            </div>
            {/* closing tag here BELOW */}
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

export default ProductComponents;