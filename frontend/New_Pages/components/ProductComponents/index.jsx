import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState, useMemo}from "react";
import axios from "../../api/axios";
import {Link} from "react-router-dom"
import Cookies from 'universal-cookie';
import { FaHeart } from "react-icons/fa";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const coookie = new Cookies();
const ProductComponents = ({data, userId}) => {

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


  const [added, setAdded] = useState(false);

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
  
  const [remove, setRemove] = useState([]);

  // function to delete an item if you are the seller
  async function deletePost(itemId) {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.delete(`/public/${itemId}`, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    alert('Removed item successfully');
    location.pathname="/sell-page/"+user.user_id;
    setStatus('Delete successful');
  }

  useEffect(() => {}, [response]);

return(
    <div className="products-wrapper">  
      {data.map((item) => {
        return(
          <div className="products-wrapper-test">  
            {/* products display 1st row*/} 
            <div className="wrapper" >
              <div className="row2">
                <div className="column">
                  <div className="card">
                    <div className="img-wrap"> 
                      <img src={item.image_urls[0]} className="logo-position"></img> 
                    </div>
                    {/* wishlist button */}
                    <div className="wishlist">
                      {/* css for heart btn in home.css */}
                      {(item.seller_id != userId) && (!wishlist.includes(item._id)) && 
                        <a className="wishlist" onClick={() => addWishlist(item._id)}> 
                          <AiOutlineHeart className="heart-icon"/> 
                        </a>}
                      {(item.seller_id != userId) && (wishlist.includes(item._id)) && 
                        <a className="wishlist" onClick={() => removeWishlist(item._id)}>
                          <AiFillHeart className="heart-icon"/>
                        </a>}
                      {(item.seller_id == userId) && <br></br>}
                    </div>

                    <div className="content-posts">
                      <p className="price"> ${item.price}</p>
                    </div>

                    <div className="item-cart">
                      <div className="no-wrap"> <h5>{item.name}</h5> </div>
                      {/* use this to link to inidivdual product info*/}
                      <Link to={`/product-page/${item._id}`}> <p><button>See More</button></p></Link>
                    </div>
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