import React, { useEffect, useState } from "react";
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
  const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dvudxm6kj/image/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'T34ITProject';
  const [firstRender, setFirstRender] = useState(false);
  const [values, setValues] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemCategory: "",
    itemGroup: "",
    itemVisbility: "",
  });

  const PostNewListing =  event => {
    /* item details */
    event.preventDefault();
    const props = {
      name: values.itemName,
      description: values.itemDescription,
      price: values.itemPrice,
      public_visibility: values.itemVisbility,
      category_ids: [],
      group_ids: []
    }

    if (values.itemCategory) {
      props.category_ids = [values.itemCategory];
    }

    if (values.itemGroup) {
      props.group_ids = [values.itemGroup];
    }

    console.log(props);

    /* image details */
    const formData = new FormData();
    formData.append('file', image.raw);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //console.log(formData);

    /* posting */
    
    axios.post('/public', props)
    .then(function (res1) {
      if (res1.status=="200" && !image.preview) {
        location.pathname='/home-page';
      } else if (res1.status=="200" && image.preview) {
        console.log(res1.data._id);
        console.log(image.preview);
        console.log('item details successful');

        // image upload
        axios.post(CLOUDINARY_URL, formData)
        .then(function (res2) {
          console.log('RES 2');
          console.log(res2);
          if (res2.status=="200") {
            const imageProp = {image_urls: [res2.data.secure_url], cloudinary_ids: [res2.data.public_id]};
            console.log(imageProp);

            axios.patch('/public/' + res1.data._id, imageProp)
            .then(function (res3) {
              console.log('RES 3');
              console.log(res3);
              if (res1.status=="200") {
                location.pathname='/home-page';
              } else {
                console.log("item updating went wrong");
              }
            })
            .catch(function (error) {
              console.log("image went wrong 2");
            });
          } else {
            console.log("image went wrong");
          }
        })
        .catch(function (error) {
          console.log("image went wrong 3");
        });
      } else {
        console.log("item went wrong");
      }
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  {/* options to select for category drop down*/}
  const [categories, setCategories] = useState('');
  
  const getCatergories = () => {
    axios.get('http://localhost:3000/category')
    .then(res => {
      setCategories(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  const categoryOptions = [
    {value: '', text: '---Select a category---'},
  ];
  
  for (const category of categories) {
    categoryOptions.push({value: category._id, text: category.name});
  }

  {/* options for visibility*/}
  const visibilityOptions = [
    {value: '', text: '---Select sell visbility---'},
    {value: true, text: 'Public'},
    {value: false, text: 'Private'},
  ];

  {/* options for group dropdown menu */}
  const [groups, setGroups] = useState('');
  const getGroups = () => {
    axios.get('http://localhost:3000/groups')
    .then(res => {
      setGroups(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    if (!firstRender) {
      getGroups();
      getCatergories();
      setFirstRender(true);
    }
  }, [firstRender]);
    
  const groupOptions = [
    {value: '', text: '---Select group if applicable---'}
  ];
  
  for (const group of groups) {
    groupOptions.push({value: group._id, text: group.name});
  }

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


  {/* stuff for image upload*/} 

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      console.log(e.target.files[0])
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
   
  /*
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
  };*/
    
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

    {/*<button onClick={handleUpload}>Upload Image</button>   */}
    </div>
    
    {/* form to input new listing data*/}
    <div class="container">
        <form className="publish-form">
            
            {/* onChange event here to get data */}
            
            <label for="item-name"> <div className="item-name"> Item Name: </div></label>
            <input type="listing-text"
                onChange={(e)=> setValues({...values, itemName:e.target.value})} 
              />
            <label for="enter-price"><div className="item-name"> Price: </div></label>
            <input type="listing-text"
              onChange={(e)=> setValues({...values, itemPrice:e.target.value})} 
            />
            <label for="enter-desc"> <div className="item-name">Item Description:</div></label>
            <input type="asd" 
                onChange={(e)=> setValues({...values, itemDescription:e.target.value})} 
            />

              {/* select on change for dropdown button*/}

            <label for="category-name"><div className="item-name"> Item Category:</div></label>
            <select type="category-listing" value={selectedCat} onChange={handleChangeCat}>
                {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
                ))}
                
      </select>

          {/* select on change for dropdown button*/}

          <label for="visbility-list"> <div className="item-name">Item Visibility:</div></label>
          <select type="category-listing" value={selectedVis} onChange={handleChangeVis}>
                {visibilityOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>   
                ))}
      </select>

        {/* select on change for dropdown button*/}

        <label for="groups-list"> <div className="item-name">Group Select:</div></label>
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