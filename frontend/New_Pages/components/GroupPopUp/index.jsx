import React from "react";
import "./GroupPopUp.css";

import logo from "../../dist/img/t34-logo.jpg";
const Popup = props => {


    
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="square-popup">
          <img src={logo} className="popup-img"></img> 
        </div>
        <div className="popup-text"> 
        {props.name} <p> 31k Members</p>
       
        <button> Member's List</button>
       
        <br/>
        Owner: YenFug</div>
        <div className="header-popup"> {props.name}</div> 
        <hr className="hr-line"/>
        <div className="test">{props.other}</div>
        
        <div className="popup-btn"> <button > Join Group</button> </div>
       
    </div>
    </div>
    
  );
};
 
export default Popup;