import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

import SideNav from "../SideNavComponent";
import NavBar from "../NavBarComponent"

import "./MyGroupsDisplay.css"
const MyGroupsDisplay = () => {

  return (
   <div className="parent" > 
   <NavBar />
   <SideNav />


    <div className="popup-box-display">
      <div className="display-box">
        <div className="display-square-popup">
          {/*<img src={groups.image_urls} className="popup-img"></img> */}
          
        </div>
        <div className="popup-text"> 
        
        </div>
        <div className="header-popup-display">Group Name Here <div className="smaller"> Owner name:</div> <button> Member's List</button></div> 
        <hr className="hr-line"/>
        <div className="component-display"> INSERT MY GROUPS COMPONENT ITEM DISPLAY HERE</div> 
      
    </div>
    </div>
  </div>
  );
};
 
export default MyGroupsDisplay;