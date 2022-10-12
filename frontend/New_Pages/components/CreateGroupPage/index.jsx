import React, { useState, useEffect} from "react";
import axios from "../../api/axios";
import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import "./CreateGroupPage.css";
import { RadioButton } from "./RadioButton";
import Cookie from 'universal-cookie';

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';


const CreateGroupPage = () => {

    {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
    var coookie = new Cookie();
    const [user, setUser] = useState([]);
    const fetchData = async () => {
      const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
      console.log(server_res);
      //const user = server_res.data.user_email;
      const user = server_res.data;
      setUser(user);
      //console.log(server_res.data.user_id);
    
    };
    
  
    {/*method to unpack the data and fetch effect*/ }
    useEffect(() => {
      fetchData();
    }, []);

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

     const [values, setValues] = useState({
      groupName: "",
      groupDescription: "",
      groupVisibility: "",
    });

    console.log(values);
  
    
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
      <a href="/login-page"> <AiOutlineLock className="icon"/> Log Out</a>
      <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
      <a href="/checkout-page"> Cart</a>
   
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
            
            <label for="item-name"> <div className="item-name">Group Name: </div></label>
            <input type="listing-text"
            onChange={(e)=> setValues({...values, groupName:e.target.value})} 
             />
            <label for="enter-desc"> <div className="item-name">Group Description:</div></label>
            <input type="asd" 
            onChange={(e)=> setValues({...values, groupDescription:e.target.value})} 
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