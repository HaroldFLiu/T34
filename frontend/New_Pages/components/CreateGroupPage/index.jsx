import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import uploadPlaceholder from "../../dist/img/upload-picture.jpg";
import "./CreateGroupPage.css";
import Cookie from 'universal-cookie';
import NavBar from "../NavBarComponent"


const CreateGroupPage = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;

    // Change zoom level on mount
    document.body.style.zoom = "80%";

    return () => {
      // Restore default value
      document.body.style.zoom = initialValue;
    };
  }, []);
  
  var coookie = new Cookie();

  const [user, setUser] = useState([]);

  // function to fetch the current user's data
  const fetchData = async () => {
      const server_res = await axios.get("/getuser", 
        {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
      const user = server_res.data.user_id;
      setUser(user);
  };
  

  useEffect(() => {
      fetchData();
  }, []);

  {/* stuff for image upload*/} 

  const [image, setImage] = useState({ preview: "", raw: "" });

  // function to get image upload info
  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const [values, setValues] = useState({
    groupName: "",
    groupDescription: "",
  });


  // function to post the new group
  const PostNewGroup =  event => {
    /* group details */
    event.preventDefault();
    const props = {
      name: values.groupName,
      description: values.groupDescription,
      members: [user],
      admins: [user],
      icon_url: ""
    }

    /* image details */
    const formData = new FormData();
    formData.append('file', image.raw);

    /* error handling */
    if (!image.raw) {
      alert('Image Required. Please fill in all fields.');
      return;
    }

    if (!props.name) {
      alert('Group Name Required. Please fill in all fields.');
      return;
    }

    if (!props.description) {
      alert('Group Description Required. Please fill in all fields.');
      return;
    }

    /* posting */
    // image upload
    axios({
      method: 'post',
      url: '/public/image',
      data: formData,
      withCredentials:true, 
      headers:{'Authorization':coookie.get("token")}
    })
    .then(function (res1) {
      if (res1.status=="200") {
        props.icon_url = res1.data.image_urls[0];

        // group upload
        axios.post('/groups', props, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
        .then(function (res2) {
          if (res2.status=="200") {
            alert('Created group successfully');
            // redirect if successful
            location.pathname=`/my-groups-page/${user}`;
          } else {
            console.log("group posting went wrong");
          }
        })
        .catch(function (error) {
          alert(error);
        });
      } else {
        alert("Group image posting went wrong");
      }
    })
    .catch(function (error) {
      alert("Group image posting went wrong. Only accepts .jpeg, .jpg, .png");
    });
  }

  const [groups, setGroups] = useState('');

  // function to get the number of groups
  const getGroups = () => {
    axios.get('/groups', {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      setGroups(res.data.length);
    }).catch(err => {
      console.log(err);
    })
  }

  const [firstRender, setFirstRender] = useState(false);
  useEffect(() => {
    if (!firstRender) {
      getGroups();
      //fetchData();
      setFirstRender(true);
    }
  }, [firstRender]);
  
  return (
    <div className="parent" >
      <NavBar />
      <div class="listings-main">
        <div className="home-title"> Create a Group now,<a> and start listing privately right away!</a></div>
      </div>
      <hr />
      <div className="number-listings"> {groups} groups online </div>
      <hr />

      {/*Upload Image box and button handle uploading img*/}    
      <div class="left-box">
        <label for="item-name"> <div className="item-name">Group Icon*: </div></label>
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
      </div>
      
      {/* form to input new listing data*/}
      <div class="container">
        <form className="publish-form-group">
            
          {/* onChange event here to get data */}
          <label for="item-name"> <div className="item-name">Group Name*: </div></label>
          <input type="listing-text"
          onChange={(e)=> setValues({...values, groupName:e.target.value})} 
          />
          <label for="enter-desc"> <div className="item-name">Group Description*:</div></label>
          <input type="asd" 
          onChange={(e)=> setValues({...values, groupDescription:e.target.value})} 
          />

        </form> 
        {/* on click to submit new listing here*/}
        <button className="publish-btn" onClick={PostNewGroup}> Create Group</button>
      </div>
    </div>
  );
}

export default CreateGroupPage;