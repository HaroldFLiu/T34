import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import {Link} from "react-router-dom"
import Cookies from 'universal-cookie';
const coookie = new Cookies();

const SellComponent = ({data}) => {

  const [remove, setRemove] = useState([]);

  // function to delete item
  async function deletePost(id) {
    await axios.delete(`/public/${id}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    alert('Removed item successfully');
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

                    <div className="img-wrap"> 
                      <img src={item.image_urls[0]} className="logo-position"></img> 
                    </div>

                    {/*btn css in home.css */}
                    <div class="sold">
                      {(item.sold == true) && <p><label> <b> SOLD</b> </label></p>}
                      {(item.sold == false) && <div className="space"> </div>}
                    </div>

                    <div className="content-posts">
                      <p class="price"> ${item.price}</p>
                    </div>

                    <div className="item-cart">
                      <div className="no-wrap"> <h5>{item.name}</h5> </div>
                    
                      {/* use this to link to inidivdual product info*/}
                      <Link to={`/product-page/${item._id}`}> 
                        <a href="#"> <p><button className="see-more">See More</button></p></a>
                      </Link>
                    </div>
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