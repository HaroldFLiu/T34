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

const GroupInfoPage = () => {
  {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
  var coookie = new Cookie();
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    //const user = server_res.data.user_email;
    const user = server_res.data.user_id;
    setUser(user);
    //console.log(server_res.data.user_id);
  };

  {/*method to unpack the data and fetch effect*/ }
  useEffect(() => {
    fetchData();
  }, []);
   
  const goMember = event => {
    event.preventDefault();
    location.pathname="/member-list-page/"+groupId;
  }
   
  {/* TO GET SINGLE ITEM NEED CONDITION TO ACCESS CLICKED ITEMS'S ID*/}
  const {groupId} = useParams()
  //const thisProduct = posts.find(prod => prod.id == productId)
  {/*degub log here */}
  //console.log(groupId);

  {/*fetch item data*/}
  const [group, setGroup] = useState({});
  const [firstRender, setFirstRender] = useState(false);

  const [members, setMembers] = useState([]);
  const [isMember, setIsMember] = useState(false);

  const fetchGroup = async () => {
    axios.get(`/groups/group/${groupId}`)
    .then(res => {
      setGroup(res.data);
      //console.log(res.data);
      console.log(group);
      setMembers(res.data.members);
      console.log(members);
      setFirstRender(true);
    })
  };

  useEffect(() => {
    fetchGroup();
  }, [firstRender]);

  // const JoinGroup = event => {
  //   event.preventDefault();
  //   if (!members.includes(user)) {
  //     var newMembers = members;
  //     newMembers.push(user);
  //     console.log(newMembers);
  //     axios.patch('/groups/'+ groupId, {
  //       members: newMembers,
  //     }).then(function (response){
  //       alert("You have become a member of the group!");
  //       setIsMember(true);
  //       //window.location.reload();
  //     })
  //     .catch(() => {
  //       alert('Oops, something went wrong.');
  //     });
  //   }
  // }

  // const LeaveGroup = event => {
  //   event.preventDefault();
  //   if (members.includes(user)) {
  //     var newMembers = members;
  //     newMembers.filter((x) => (x != JSON.stringify(user)));
  //     console.log(newMembers);
  //     axios.patch('/groups/'+ groupId, {
  //       members: newMembers,
  //     }).then(function (response){
  //       alert("You left the group!");
  //       //window.location.reload();
  //       setIsMember(false);
  //     })
  //     .catch(() => {
  //       alert('Oops, something went wrong.');
  //     });
  //   }
  // }
  
  return (
    <div className="parent" > 
    <NavBar />
    <SideNav />

    <div className="popup-box">
      <div className="box">
      <a href="/group-page"> <span className="close-icon"> x</span> </a>
        <div className="square-popup">
          <img src={group.icon_url} className="popup-img"></img> 
          
        </div>
        <div className="popup-text"> 
        {group.name}

        <button onClick={goMember}> Member's List</button>
       
        <br/>
        </div>
        <div className="header-popup">{group.name}</div> 
        <hr className="hr-line"/>
        <div className="test">{group.description}</div>
        
        {/* {!isMember && <div className="popup-btn" onClick={JoinGroup}> <button > Join Group</button> </div>}
        {isMember && <div className="popup-btn" onClick={LeaveGroup}> <button > Leave Group</button> </div>} */}
    </div>
    </div>
  </div>
  );
};
 
export default GroupInfoPage;