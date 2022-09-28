import React from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./MemberListPage.css";

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

const MemberListPage = () => {

return (
    <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <a class="active" href="/sell-page"> <HiOutlineShoppingBag className="icon"/> Sell</a>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-group-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="/login-page"> <AiOutlineLock className="icon"/> Log In</a>
      <a href="/sign-up-page"><RiBookOpenLine className="icon" /> Register</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>
        
    <div class="listings-main">
      <div className="home-title"> Members </div>
      
    </div>
    <hr />
    <div className="number-listings"> 123 members</div>
    {/* search member button*/} 
    <div className = "search-member">
        <input type="text"placeholder="Search Member.."> 
            </input>
    </div>
    
    <hr />

       {/*Upload Image box and button handle uploading img*/}    
    <div class="left-box">
        <div className="square-pic">  
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>


        </div> 
    </div>
    
    {/* form to input new listing data*/}

       
</div>

    );
}

export default MemberListPage;