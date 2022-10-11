import React from "react";
import "./GroupPopUp.css";
const Popup = props => {


    
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        GROUP NAME: XXX 
        <br/>
        GROUP DESCRIPTION: 123
        <br/>
        join group btn
        <br/>
        MEMBERS AMOUNT: 123
        <br/>
        MEMBERS LIST BTN 
        <br/>
        owner


      </div>
    </div>
  );
};
 
export default Popup;