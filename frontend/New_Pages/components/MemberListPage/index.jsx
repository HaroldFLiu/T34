import React, {useEffect, useState}from "react";
import "./MemberListPage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import MemberList from "../MemberList";
/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

const MemberListPage = () => {


  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get("/public");
    setPosts(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

return (
    <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <a href="/sell-page"> <HiOutlineShoppingBag className="icon"/> Sell</a>
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
    {/* search member button (need fix)*/} 
    <div className = "search-member">
        <input type="text"placeholder="Search Member.."> 
            </input>
    </div>
    
    <hr />

       {/*Group img*/}    
    <div class="left-box">
        <div className="square-pic">  
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        </div> 
    </div>
    
    {/* member list of the group*/}
    <div className="wrapper" >
        <div class="row2">
          <div class="column">
          <MemberList/>
          </div>
        </div>
    </div>

    {/* next page bar here*/}
    <div class="center-next">
      <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>

    

       
</div>

    );
}

export default MemberListPage;