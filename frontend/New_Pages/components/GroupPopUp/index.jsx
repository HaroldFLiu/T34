import React, {useEffect, useState}from "react";
import {Link} from "react-router-dom";
import "./GroupPopUp.css";
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

/* category icons */
import {FaCar} from 'react-icons/fa';
import {FaTshirt} from 'react-icons/fa';
import {BsPlugFill} from 'react-icons/bs';
import {MdFamilyRestroom} from 'react-icons/md';
import {IoIosLeaf} from 'react-icons/io';
import {FaChessKnight} from 'react-icons/fa';
import {GiSofa} from 'react-icons/gi';
import {FaHammer} from 'react-icons/fa';
import {FaGuitar} from 'react-icons/fa';
import {FaPenFancy} from 'react-icons/fa';
import {FaDog} from 'react-icons/fa';
import {MdSportsFootball} from 'react-icons/md';
import {MdSmartToy} from 'react-icons/md';
import Cookie from 'universal-cookie';

import logo from "../../dist/img/t34-logo.jpg";
const GroupInfoPage = () => {

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


    {/* TO GET SINGLE ITEM NEED CONDITION TO ACCESS CLICKED ITEMS'S ID*/}
    const {groupId} = useParams()
    //const thisProduct = posts.find(prod => prod.id == productId)
    {/*degub log here */}
    console.log(groupId);

    {/*fetch item data*/}
    
    const [groups, setGroups] = useState([]);


    const fetchGroups = async () => {
      const { data } = await axios.get(`/groups/${groupId}`);
      fetchGroups(data);
    };

  
    useEffect(() => {
      fetchGroups();
    }, []);
    


  return (
    <div className="parent" > 
         {/* top nav bar*/}
         <div class="navbar">
      <h1 className="website-title"> Market34</h1>
      <a class="active" href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <a href="/sell-page"> <HiOutlineShoppingBag className="icon"/> Sell</a>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
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

        {/* side bar*/} 
   
        <div class="sidenav">
    <div className="header">
    Categories
    </div>
    <Link to={"/category-page/6344f49289f424dbbff4741"}> <FaCar className="icon"/> Vechicles </Link>
    <a href="#"> <FaTshirt className="icon"/> Apparel</a>
    <a href="#"> <BsPlugFill className="icon"/> Electronics</a>
    <a href="#"> <MdFamilyRestroom className="icon"/> Family</a>
    <a href="#">  <IoIosLeaf className="icon"/> Garden & Outdoor</a>
    <a href="#"> <FaChessKnight className="icon"/> Hobbies</a>
    <a href="#"><GiSofa className="icon"/>  Home Goods</a>
    <a href="#"> <FaHammer className="icon-flipped"/> Home Improvement &nbsp;&nbsp;&nbsp; Supplies</a>
    <a href="#"> <FaGuitar className="icon-flipped"/> Musical Instruments</a>
    <a href="#"> <FaPenFancy className="icon"/> Office Supplies</a>
    <a href="#"> <FaDog className="icon-flipped"/> Pet Supplies</a>
    <a href="#"> <MdSportsFootball className="icon"/> Sporting Goods</a>
    <a href="#"> <MdSmartToy className="icon"/> Toys & Games</a>

  </div>


    <div className="popup-box">
      <div className="box">
        <div className="square-popup">
          <img src={logo} className="popup-img"></img> 
        </div>
        <div className="popup-text"> 
        Marketplace sellers <p> 31k Members</p>
       
        <button> Member's List</button>
       
        <br/>
        Owner: YenFug</div>
        <div className="header-popup">{groups.name}</div> 
        <hr className="hr-line"/>
        <div className="test">grou pdescription here</div>
        
        <div className="popup-btn"> <button > Join Group</button> </div>
       
    </div>
    </div>
  </div>
  );
};
 
export default GroupInfoPage;