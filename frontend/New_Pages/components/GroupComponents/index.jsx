
import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import GroupPopUp from "../GroupPopUp";
function GroupComponents() {


    const [posts, setPosts] = useState([]);

    // Define the function that fetches the data from API
    const fetchData = async () => {
      const { data } = await axios.get("/groups");
      setPosts(data);
    };
  
    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
      fetchData();
    }, []);


    {/*Group pop up stuff*/}

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
  


return(
    <div className="products-wrapper">  
    {posts.map((post) => {
      return(
        <div className="products-wrapper-test">  
        {/* products display 1st row*/} 
        <div className="wrapper" >
        <div class="row2">
          <div class="column">
          <div class="card">
            {/*  add href to group info page*/}
            <a href="#" onClick={togglePopup} >
            <div className="img-wrap"> 
              <img src={logo} className="logo-position">
              </img> 
            </div>
            {/* spacer instead of wishlist btn*/}
            &nbsp;
                <div className="item-cart">
                    <h5>{post.name}</h5>
                    <p class="members-text">31k Members</p>
                    <p><button>Join Group</button></p>
                </div>
            </a>
            {isOpen && <GroupPopUp

      handleClose={togglePopup}
    />}
            
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

export default GroupComponents;