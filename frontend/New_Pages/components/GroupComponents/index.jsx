import logo from "../../dist/img/t34-logo.jpg";
import React, {useEffect, useState}from "react";
import {Link} from "react-router-dom";

const GroupComponents = ({data}) => {

  return(
    <div className="products-wrapper">  
      {data.map((group) => {
        return(
          <div className="products-wrapper-test">  
            {/* group display */} 
            <div className="wrapper" >
              <div class="row2">
                <div class="column">
                  <div class="card">
                    <div className="img-wrap"> 
                      <img src={group.icon_url} className="logo-position"></img> 
                    </div>
                    {/* spacer instead of wishlist btn*/}
                    &nbsp;
                    <div className="item-cart">
                      <div className="no-wrap"> <h5>{group.name}</h5> </div>
                      <p class="members-text">{group.members.length} Members</p>
                      <Link to={`/group-info-page/${group._id}`}> <p><button>See More</button></p></Link>
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
export default GroupComponents;