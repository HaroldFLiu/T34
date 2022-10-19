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
  const [group, setGroup] = useState({});
  const [firstRender, setFirstRender] = useState(false);

  const [isMember, setIsMember] = useState(false);

  {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
  var coookie = new Cookie();

  {/*method to unpack the data and fetch effect*/ }
  useEffect(() => {
    if (!firstRender) {
      fetchGroup();
      setFirstRender(true);
    }
  }, [firstRender]);
   
  const goMember = event => {
    event.preventDefault();
    location.pathname="/member-list-page/"+groupId;
  }
   
  const {groupId} = useParams()

  const fetchGroup = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.get(`/groups/group/${groupId}`)
    .then(res => {
      setGroup(res.data);
      //console.log(res.data.members);
      //console.log(user.user_id);
      if (res.data.members.includes(user.user_id)) {
        setIsMember(true);
      }
    })
  };

  async function JoinGroup () {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    const user = server_res.data;
    await axios.patch('/groups/'+ groupId +'/add/' + user.user_id)
    .then(function (response){
      alert("You have joined the group!");
      //window.location.reload();
      setIsMember(true);
    })
    .catch(() => {
      alert('Oops, something went wrong.');
    });
  };

  async function LeaveGroup () {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    const user = server_res.data;
    await axios.patch('/groups/'+ groupId +'/leave/' + user.user_id)
    .then(function (response){
      alert("You left the group!");
      //window.location.reload();
      setIsMember(false);
    })
    .catch(() => {
      alert('Oops, something went wrong.');
    });
  };
  
  // <div class="box box1"><img src="balloon.jpg" alt="a balloon"></div>
  return (
    <div className="parent" > 
    <NavBar />

    <div className="popup-box">
      <div className="box">
     { /*<a href="/group-page"> <span className="close-icon"> x</span> </a>*/}
    
       { <div className="square-popup">
          <img src={group.icon_url} className="popup-img"></img> 
          
        </div>}
        <div className="popup-text"> 
        {group.name}

        <button onClick={goMember}> Member's List</button>
       
        <br/>
        </div>
        <div className="header-popup">{group.name}</div> 
        <hr className="hr-line"/>
        <div className="test">{group.description}</div>
        
        {!isMember && <div className="popup-btn" onClick={() => JoinGroup()}> <button > Join Group</button> </div>}
        {isMember && <div className="popup-btn" onClick={() => LeaveGroup()}> <button > Leave Group</button> </div>}
    </div>
    </div>
  </div>
  );
};
 
export default GroupInfoPage;