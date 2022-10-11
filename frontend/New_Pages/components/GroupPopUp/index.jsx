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
        Marketplace Sellers <p> 31k Members</p>
       
        <button> Member's List</button>
       
        <br/>
        Owner: YenFug</div>
        <div className="header-popup">Marketplace Sellers </div> 
        <hr className="hr-line"/>
        <div className="test"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare lectus sit amet est placerat in egestas erat. Duis at tellus at urna condimentum mattis pellentesque id nibh. Vulputate eu scelerisque felis imperdiet proin. Varius quam quisque id diam vel quam elementum. Felis imperdiet proin fermentum leo vel orci porta. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Sed euismod nisi porta lorem. Lacus sed viverra tellus in hac habitasse platea dictumst. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. In hendrerit gravida rutrum quisque non tellus orci ac. Molestie nunc non blandit massa enim nec dui nunc. At varius vel pharetra vel turpis nunc eget lorem dolor. Quis eleifend quam adipiscing vitae proin. Tellus at urna condimentum mattis pellentesque id nibh tortor. </div>
        
        <div className="popup-btn"> <button > Join Group</button> </div>
    </div>
    </div>
    
  );
};
 
export default Popup;