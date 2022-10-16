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

import logo from "../../dist/img/t34-logo.jpg";
import SideNav from "../SideNavComponent";
import Cookie from 'universal-cookie';
import {Link} from "react-router-dom";

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
     console.log(server_res.data.user_id);
   
   };
   
   const goMember = event => {
    event.preventDefault();
    location.pathname="/member-list-page/"+groupId;
  }
   
 
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

    const JoinGroup =  event => {
      if (!groups.members || !groups.members.includes(user.user_id)) {
        groups.members.push(user.user_id);
      }
    
      event.preventDefault();
      axios.patch('/groups/'+ groupId, {
        members: groups.members,

      }).then(function (response){
        alert("You have become a member of the group!");
      })
      .catch(() => {
        alert('Oops, something went wrong.');
        });
      
    }
    


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


    <div className="popup-box">
      <div className="box">
      <a href="/group-page"> <span className="close-icon"> x</span> </a>
        <div className="square-popup">
          <img src={groups.image_urls} className="popup-img"></img> 
          
        </div>
        <div className="popup-text"> 
        {groups.name} <p> 31k Members</p>

       
        <button onClick={goMember}> Member's List</button>
       
        <br/>
        Owner: YenFug</div>
        <div className="header-popup">{groups.name}</div> 
        <hr className="hr-line"/>
        <div className="test">{groups.description}</div>
        
        <div className="popup-btn" onClick={JoinGroup}> <button > Join Group</button> </div>
       
    </div>
    </div>
  </div>
  );
};
 
export default GroupInfoPage;