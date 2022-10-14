import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import {Link} from "react-router-dom"

const SellComponent = ({data}) => {

// /public/:item_id delete item here

// find item_id
// delete request here
// below do on-click btn --> delete request 


  {data.map((item) => {
    console.log(item._id);
  })};

  const [remove, setRemove] = useState([]);

/* deletes an item function BUT DODGEY RELOAD TO DISPLAY  */
  async function deletePost(id) {
    await axios.delete(`/public/${id}`);
    window.location.reload();
    setStatus('Delete successful');
}


return(
    <div className="products-wrapper">  
    {data.map((item) => {
      return(
        <div className="products-wrapper-test">  
        {/* products display 1st row*/} 
        <div className="wrapper" >
        <div class="row2">
          <div class="column">
          <div class="card">
            {/*  add href to product page TO LINK TO OBJECT_ID*/}
            <Link to={`/product-page/${item._id}`}>
            <div className="img-wrap"> 
             <img src={item.image_urls[0]} className="logo-position">
              </img> 
      
            </div>
            <div className="space"> </div>
            <div className="content-posts">
            <p class="price"> ${item.price}</p>
          </div> </Link>
            <div className="item-cart">
            <h3>{item.name}</h3>
            
            <a href="#"> <p><button onClick={() => deletePost(item._id)}>Remove </button></p></a>
        
            {/* use this to link to inidivdual product info*/}
            </div>
            {/* closing tag here BELOW */}
           
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

export default SellComponent;