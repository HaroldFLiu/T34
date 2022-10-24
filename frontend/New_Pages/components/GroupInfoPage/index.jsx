import React, {useEffect, useState}from "react";
import {Link} from "react-router-dom";
import "./GroupInfoPage.css";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

import logo from "../../dist/img/t34-logo.jpg";
import SideNav from "../SideNavComponent";
import NavBar from "../NavBarComponent";
import Cookie from 'universal-cookie';
import {Link} from "react-router-dom";
import ProductComponents from "../ProductComponents";

const GroupInfoPage = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;

    // Change zoom level on mount
    document.body.style.zoom = "80%";

    return () => {
      // Restore default value
      document.body.style.zoom = initialValue;
    };
  }, []);
  
  const [group, setGroup] = useState({});
  const [firstRender, setFirstRender] = useState(false);

  const [isMember, setIsMember] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const {groupId} = useParams()

  var coookie = new Cookie();

  useEffect(() => {
    if (!firstRender) {
      fetchGroup();
      setFirstRender(true);
    }
  }, [firstRender]);
   
  // function to redirect to member list page
  const goMember = event => {
    event.preventDefault();
    location.pathname="/member-list-page/"+groupId;
  }
   
  // function to fetch group data, as well as determine if user is an admin 
  // and/or member of the group
  const fetchGroup = async () => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    await axios.get(`/groups/group/${groupId}`, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      setGroup(res.data);
      console.log(res.data);
      if (res.data.admins.includes(user)) {
        setIsAdmin(true);
      }

      if (res.data.members.includes(user)) {
        setIsMember(true);
      }
    })
  };

  // function to join group if you are not a member
  async function joinGroup () {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.patch('/groups/'+ groupId +'/add/' + user.user_id, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(function (response){
      alert("You have joined the group!");
      // redirect if successful
      setIsMember(true);
      location.pathname="/my-groups-display/"+groupId;
    })
    .catch(() => {
      alert('Oops, something went wrong.');
    });
  };

  // function to leave the group if you are a member
  async function leaveGroup () {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.patch('/groups/'+ groupId +'/leave/' + user.user_id, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(function (response){
      alert("You left the group!");
      setIsMember(false);
      // redirect if successful
      location.pathname="/my-groups-page/"+user.user_id;
    })
    .catch(() => {
      alert('Oops, something went wrong.');
    });
  };

  // function to remove the group if you are an admin
  async function removeGroup () {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.delete('/groups/'+ groupId, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(function (response){
      alert("Group has been deleted!");
      location.pathname="/my-groups-page/"+user.user_id;
    })
    .catch(() => {
      alert('Oops, something went wrong.');
    });
  };
  
  return (
    <div className="parent" > 
      <NavBar />

      <div className="popup-box">
        <div className="box">
      
          {<div className="square-popup">
            <img src={group.icon_url} className="popup-img"></img> 
          </div>}

          <div className="popup-text"> 
            <button onClick={goMember}> Member's List</button>
            <br/>
          </div>

          <div className="header-popup">{group.name}</div> 
          <hr className="hr-line"/>
          <div className="test">{group.description}</div>
          
          {!isMember && <div className="popup-btn" onClick={() => joinGroup()}> <button > Join Group</button> </div>}
          {isMember && <div className="popup-btn" onClick={() => leaveGroup()}> <button > Leave Group</button> </div>}
          {isAdmin && <div onClick={() => removeGroup()}> <button> Remove Group</button> </div>}
        </div>
      </div>
    </div>
  );
};
 
export default GroupInfoPage;