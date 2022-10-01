import React, { useState } from "react";
import axios from "../../api/axios";
import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import "./CreateGroupPage.css";
import { RadioButton } from "./RadioButton";

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';


const CreateGroupPage = () => {

      {/* stuff for radio button*/} 
      const [visbility, setVisbility] = useState("");

    const radioChangeHandler = (e) => {
      setVisbility(e.target.value);
    }  


     {/* stuff for image upload*/} 

     const [image, setImage] = useState({ preview: "", raw: "" });

     const handleChange = e => {
       if (e.target.files.length) {
         setImage({
           preview: URL.createObjectURL(e.target.files[0]),
           raw: e.target.files[0]
         });
       }
     };
   
     const handleUpload = async e => {
       e.preventDefault();
       const formData = new FormData();
       formData.append("image", image.raw);
       try {
        const response = await axios({
          method: "post",
          url: "/api/upload/file",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }

     };
    
    return (
    <div className="parent" >
     {/* top nav bar*/}
     <div class="navbar">
      <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <a href="/sell-page"> <HiOutlineShoppingBag className="icon"/> Sell</a>
        <a class="active" href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-groups-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="/login-page"> <AiOutlineLock className="icon"/> Log In</a>
      <a href="/sign-up-page"><RiBookOpenLine className="icon" /> Register</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>
        
    <div class="listings-main">
      <div className="home-title"> Create a Group now,<a> and start lisitng privately right away!</a></div>
      
    </div>
    <hr />
    <div className="number-listings"> 1234, 5678 groups online
    
    {/* on click to submit new listing here*/}

    <button className="publish-btn"> Create Group</button>
    </div>
    <hr />
       {/*Upload Image box and button handle uploading img*/}    
    <div class="left-box">
        <div className="square-pic">  
        <label htmlFor="upload-button">

             {/* image preview conditionals for user to see*/} 
            {image.preview ? (
          <img src={image.preview} alt="dummy" width="100%" height="100%" />
        ) : (
          <>
     <img src={uploadPlaceholder} className="upload-placeholder"></img> 
          </>
        )}
        </label>  
        <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />  
        </div>

    <button onClick={handleUpload}>Upload Image</button>   
    </div>
    
    {/* form to input new listing data*/}
    <div class="container">
        <form className="publish-form">
            
            {/* onChange event here to get data */}
            
            <label for="item-name"> Group Name:</label>
            <input type="listing-text"
             />
            <label for="enter-desc"> Group Description:</label>
            <input type="asd" 
            />
             {/* select on change for dropdown button*/}
    
    {/* visibility radio buttons to be done here  */}
    <div className="vis-container">
      <div class="flex-child">
      <div className="visbility-header">
      <div  className="radio-public">
      <RadioButton
          changed={radioChangeHandler}
          id="1"
          value="public"
        />
        </div>
        Public
      </div>
      <div className="visbility-text">
        Anyone can join this group.
      </div>
    </div>
    
    <div class="flex-child">
    <div className="visbility-header">
    <div  className="radio-public">
      <RadioButton
          changed={radioChangeHandler}
          id="2"
          value="private"
        />
        </div>
        Private
      </div>
      <div className="visbility-text-1">
        Only people given access can join this group.
      </div>
    </div>

    </div>
    </form> 
    </div>
       
</div>
    
   
  );
}

export default CreateGroupPage;