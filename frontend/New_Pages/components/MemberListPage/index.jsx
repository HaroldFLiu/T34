import React, {useEffect, useState}from "react";
import "./MemberListPage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import MemberList from "../MemberList";
import { useParams } from "react-router-dom";
import Cookie from 'universal-cookie';
/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

const MemberListPage = () => {


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
    setGroups(data);
  };


  useEffect(() => {
    fetchGroups();
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
      {/* need to add logout btn, rn just redirects without sign out*/}
      <a href="/login-page"> <AiOutlineLock className="icon"/> Log Out</a>
      <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
      <a href="/checkout-page"> Cart</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>
        
    <div class="listings-main">
      <div className="home-title"> Members </div>
      
    </div>
    <hr />
    <div className="number-listings"> {groups.length} members</div>
    {/* search member button (need fix)*/} 
    <div className = "search-member">
        <input type="text"placeholder="Search Member.."> 
            </input>
    </div>
    
    <hr />

       {/*Group img*/}    
    <div class="left-box">
        <div className="square-pic">  
        <div className="img-wrap"> <img src={groups.image_urls} className="popup-img"></img> </div>
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