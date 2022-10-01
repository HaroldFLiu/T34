import React, { useState } from "react";
import "./NewListings.css";
import axios from "../../api/axios";
import uploadPlaceholder from "../../dist/img/upload-picture.jpg";

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

const NewListingPage = () => {

    const [values, setValues] = useState({
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        itemCategory: "",
        itemGroup: "",
        itemVisbility: "",

      });

    const PostNewListing =  event =>{
    event.preventDefault();
    axios.post('/public/', {
        name: values.itemName,
        description: values.itemDescription,
        price: values.itemPrice,
        category_ids: categoryOptions.value,
        group_ids: groupOptions.value,
        public_visibility: visibilityOptions.value,
       // comments: "",
    })
    .then(function (response){
        console.log(response);
        if (response.status=="200") {
          location.pathname='/home-page';
        }else {
          console.log("oops");
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    }

    {/* options to select for category drop down*/}
    const categoryOptions = [
        {value: '', text: '---Select a category---'},
        {value: 'category-1', text: 'Vechicles'},
        {value: 'category-2', text: 'Apparel'},
        {value: 'category-3', text: 'Electronics'},
        {value: 'category-4', text: 'Family'},
        {value: 'category-5', text: 'Garden & Outdoor'},
        {value: 'category-6', text: 'Hobbies'},
        {value: 'category-7', text: 'Home Goods'},
        {value: 'category-8', text: 'Home Improvement Supplies'},
        {value: 'category-9', text: 'Musical Instruments'},
        {value: 'category-10', text: 'Office Supplies'},
        {value: 'category-11', text: 'Pet Supplies'},
        {value: 'category-12', text: 'Sporting Goods'},
        {value: 'category-13', text: 'Toys & Games'},

      ];
    
      {/* options for visibility*/}
      const visibilityOptions = [
        {value: '', text: '---Select sell visbility---'},
        {value: true, text: 'Public'},
        {value: false, text: 'Private'},

      ];

      const groupOptions = [
        {value: '', text: '---Select group if applicable---'},
        {value: 'group1', text: 'Test Group 1'},
        {value: 'group2', text: 'Test Group 2'},

      ];

     {/* set selected for each drop down*/}
      const [selectedVis, setSelectedVis] = useState(visibilityOptions[0].value);
      const [selectedCat, setSelectedCat] = useState(categoryOptions[0].value);
      const [selectedGroup, setSelectedGroup] = useState(groupOptions[0].value);

      {/* handle onchange for each drop down state*/}
      const handleChangeCat = e => {
        console.log(e.target.value);
        setSelectedCat(e.target.value);
        setValues({...values, itemCategory:e.target.value})
      };
    
      const handleChangeVis = e => {
        setValues({...values, itemVisbility:e.target.value})
        console.log(e.target.value);
        setSelectedVis(e.target.value);
      };
     
      const handleChangeGroup = e => {
        setValues({...values, itemGroup:e.target.value})
        console.log(e.target.value);
        setSelectedGroup(e.target.value);
      };

      console.log(values);
      console.log(categoryOptions.value);


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
          url: "/public/",
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
        <a class="active" href="/sell-page"> <HiOutlineShoppingBag className="icon"/> Sell</a>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
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
      <div className="home-title"> List an item,<a> and start selling right away!</a></div>
      
    </div>
    <hr />
    <div className="number-listings"> 1234 items sold in the last 24 hours!
    
    {/* on click to submit new listing here*/}

    <button className="publish-btn" onClick={PostNewListing}> Publish Item</button>
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
            
            <label for="item-name"> Item Name:</label>
            <input type="listing-text"
                onChange={(e)=> setValues({...values, itemName:e.target.value})} 
             />
            <label for="enter-price"> Price:</label>
            <input type="listing-text"
              onChange={(e)=> setValues({...values, itemPrice:e.target.value})} 
            />
            <label for="enter-desc"> Item Description:</label>
            <input type="asd" 
                onChange={(e)=> setValues({...values, itemDescription:e.target.value})} 
            />

             {/* select on change for dropdown button*/}

            <label for="category-name"> Item Category:</label>
            <select type="category-listing" value={selectedCat} onChange={handleChangeCat}>
                {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
                ))}
                
      </select>

         {/* select on change for dropdown button*/}

         <label for="visbility-list"> Item Visibility:</label>
         <select type="category-listing" value={selectedVis} onChange={handleChangeVis}>
                {visibilityOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>   
                ))}
      </select>

       {/* select on change for dropdown button*/}

       <label for="groups-list"> Group Select:</label>
         <select type="category-listing" value={selectedGroup} onChange={handleChangeGroup}>
                {groupOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>   
                ))}
      </select>

        
    </form> 
    </div>
       
</div>
    
   
  );
}

export default NewListingPage;