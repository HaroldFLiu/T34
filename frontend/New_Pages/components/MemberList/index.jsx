
import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
const MemberList = ({data}) => {



    

return(
    <div className="products-wrapper">  
    {data.map((member) => {{{console.log(member);}}
      return(
        <div className="products-wrapper-test">  
        {/* products display 1st row*/} 
        <div className="wrapper" >
        <div class="row2">
          <div class="column">
          <div class="card">
            {/*  add href to member page*/}
            <a href="/member-list-page" >
            <div className="img-wrap"> 
              <img src={logo} className="logo-position">
              </img> 
            </div>

			{/* spacer instead of wishlist btn*/}
            &nbsp;
			<div className="item-cart">
				<h5>{member.first_name}</h5>
				{/* member list dropdown */}
				<div className="move-drop-btn">
					<div class="dropdown">
						<button class="dropbtn">...</button>
						<div class="dropdown-content">
							<a href="#">remove member</a>
							<a href="#">set as admin</a>       
						</div>
				    </div>
			    </div> 
			</div>
             
             
            </a>
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