import React, {useEffect, useState}from "react";
import { useParams } from "react-router-dom";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import ProductComponents from "../ProductComponents";
import SideNav from "../SideNavComponent";
import {Link} from "react-router-dom"
import PageNext from "../PageNextBar/PageNext";

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi' ;
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

import Cookie from 'universal-cookie';

const CategoryPage = () => {
  {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
  var coookie = new Cookie();
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    //const user = server_res.data.user_email;
    const user = server_res.data;
    setUser(user);
    //console.log(server_res.data.user_id);
  
  };
  
  {/*method to unpack the data and fetch effect*/ }
  useEffect(() => {
    fetchData();
  }, []);

  // log OUT HERE
  const handleLogOut = async () => {
    await axios.put("/logout", {} ,{withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(response => {
      if (response.status === 200) {
        location.pathname='/login-page';
      }
    })
    .catch(error => {
      console.log("Error signing out", error);
    });
  };
        
  // get items from category ID
  const [items, setItems] = useState([]);

  const {categoryId} = useParams()
  console.log(categoryId);

  const fetchItems = async () => {
    const { data } = await axios.get(`/public/category/${categoryId}`);
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // 10 items displayed per page
  const [recordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = items.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(items.length / recordsPerPage);
  
  console.log(items);

  return (
    <div className="parent" >
      {/* top nav bar*/}
      <div class="navbar">
        <h1 className="website-title"> Market34</h1>
        <a class="active" href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <Link to={`/sell-page/${user.user_id}`}> Sell </Link>
        {/*<a href={"/sell-page/"+ user.user_id}> <HiOutlineShoppingBag className="icon"/> Sell</a>*/}
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-groups-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
        <div class="nav-login">
          {/* search bar*/}
          {/* need to add logout btn, rn just redirects without sign out*/}
          {/* <a href="/login-page"> <AiOutlineLock className="icon"/> Log Out</a>*/}
          <a href="#"> <button onClick={() => handleLogOut()}> <AiOutlineLock className="icon"/> Log Out </button></a>
          <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
          <a href="/checkout-page"> Cart</a>
          <input type="text"placeholder="Search.."> 
          </input>
        </div>
      </div>

    <SideNav />
   
      {/* products display*/} 
      <div class="main">
        <div className="home-title"> Listings:</div>
        <hr />
        <div className="number-listings"> {items.length} listings 
        
          {/* sort by button drop down*/} 
          <div className="move-drop-btn">
            <div class="dropdown">
              <button class="dropbtn">Sort by: Default</button>
              <div class="dropdown-content">
                  <a href="#">Price: High-Low</a>
                  <a href="#">Price: Low-High</a>       
              </div>
            </div>
          </div> 
        </div> 
        <hr />
  
        {/* calls on product components here trying to rewrap here*/}
        <div className="wrapper" >
          <div class="row2">
            <div class="column">
            
            <ProductComponents data={currentRecords}/> 
            <PageNext
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default CategoryPage;
