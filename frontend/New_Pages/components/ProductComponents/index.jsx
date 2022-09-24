
import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
function ProductComponents() {


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
            {/*  add href to product page*/}
            <a href="/product-page" >
            <div className="img-wrap"> 
              <img src={logo} className="logo-position">
              </img> 
            </div>
             {/* wishlist button */}
             <div class="wishlist">
              <button> wishlist </button>
            </div>
            <div className="content-posts">
            <p class="price"> {post.price}</p>
          </div>
            <div className="item-cart">
            <h3>{post.name}</h3>
            <p><button>Add to Cart</button></p>
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

export default ProductComponents;