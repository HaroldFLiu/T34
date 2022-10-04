
import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
function MemberList() {


    const [posts, setPosts] = useState([]);

    // Define the function that fetches the data from API
    const fetchData = async () => {
      const { data } = await axios.get("/public");
      setPosts(data);
    };
  
    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
      fetchData();
    }, []);


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
            {/*  add href to member page*/}
            <a href="/member-list-page" >
            <div className="img-wrap"> 
              <img src={logo} className="logo-position">
              </img> 
            </div>

			{/* spacer instead of wishlist btn*/}
            &nbsp;
			<div className="item-cart">
				<h5>{post.user_id}</h5>
				{/* member list dropdown */}
				<div className="move-drop-btn">
					<div class="dropdown">
						<button class="dropbtn">Sort by: Default</button>
						<div class="dropdown-content">
							<a href="#">remove member</a>
							<a href="#">set as admin</a>       
						</div>
				    </div>
			    </div> 
			</div>
             
             
            </a>
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

export default MemberList;