import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi' ;
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

import SideNav from "../SideNavComponent";
import Cookie from 'universal-cookie';
import {Link} from "react-router-dom";

import "./MyGroupsDisplay.css"
const MyGroupsDisplayPage = () => {

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


  return (
    <div className="parent" > 
         {/* top nav bar*/}
         <div class="navbar">
      <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <Link to={`/sell-page/${user.user_id}`}> Sell </Link>
        <a class="active" href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-groups-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      {/* need to add logout btn, rn just redirects without sign out*/}
      <a href="/login-page"> <AiOutlineLock className="icon"/> Log Out</a>
      <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
      <a href="/checkout-page"> Cart</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>

    <SideNav />


    <div className="popup-box-display">
      <div className="display-box">
        <div className="display-square-popup">
          {/*<img src={groups.image_urls} className="popup-img"></img> */}
          
        </div>
        <div className="popup-text"> 
        
        </div>
        <div className="header-popup-display">Group Name Here <div className="smaller"> Owner name:</div> <button> Member's List</button></div> 
        <hr className="hr-line"/>
        <div className="component-display"> INSERT MY GROUPS COMPONENT ITEM DISPLAY HERE</div> 
        
        
  
       
    </div>
    </div>
  </div>
  );
};
 
export default MyGroupsDisplayPage;