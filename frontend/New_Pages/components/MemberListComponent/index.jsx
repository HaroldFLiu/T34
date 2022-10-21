import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import "./MemberList.css"

const MemberList = ({data, isAdmin, admins}) => {
  const {groupId} = useParams();
  const coookie = new Cookies();

  // function to remove a member if user is an admin
  async function removeMember(memberId) {
    await axios.patch(`/groups/${groupId}/leave/${memberId}`, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(() => {
      alert('Removed user from group');
      window.location.reload()
    });
  };
  
  // function to make a member an admin if user is an admin
  async function makeAdmin(memberId) {
    await axios.patch(`/groups/${groupId}/admin/${memberId}`, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(() => {
      alert('Made user an admin of group');
      window.location.reload()
    });
  };
    
return(
  <div className="members">  
    {data.map((member) => {
      return(
        <div className="products-wrapper-test">  

          {/* products display 1st row*/} 
          <div className="wrapper" >
            <div class="row2">
              <div class="column">
                <div class="card">
                  &nbsp;
                  <div className="item-cart">
                    <h5>{member.first_name} {member.last_name}</h5>

                    {/* member list dropdown */}
                    {isAdmin && 
                    <div className="move-drop-btn">
                      <div class="dropdown">
                        <button class="dropbtn">...</button>
                        <div class="dropdown-content">
                          <a href='#' onClick={() => removeMember(member._id)}>Remove member</a>
                          {!admins.includes(member._id) && 
                            <a href='#' onClick={() => makeAdmin(member._id)}>Add as an admin</a>}     
                        </div>
                      </div>
                    </div> 
                    }
                  </div>
                </div>
              </div>   
            </div>
          </div>
        </div>  
      )
    })}
  </div>    
);
}

export default MemberList;