import React from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./MemberListPage.css";
import MemberList from '../MemberList'

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine, RiGenderlessFill} from 'react-icons/ri';



const MemberListPage = () => {

state = { //初始化状态
    users:[], //users初始值为数组
    isFirst:true, //是否为第一次打开页面
    isLoading:false,//标识是否处于加载中
    err:'',//存储请求相关的错误信息
} 

//更新App的state
updateAppState = (stateObj)=>{
    this.setState(stateObj)
}
return (
    <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <a href="/sell-page"> <HiOutlineShoppingBag className="icon"/> Sell</a>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a class="active" href="/my-group-page"> <MdOutlineGroups className="icon"/> My Groups</a>
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
      <div className="home-title"> Members </div>
      
    </div>
    <hr />
    <div className="number-listings"> 123 members</div>
    {/* search member button*/} 
    <div className = "search-member">
        <input type="text"placeholder="Search Member.."> 
            </input>
    </div>
    
    <hr />

       {/*Group img*/}    
    <div class="left-box">
        <div className="square-pic">  
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>


        </div> 
    </div>
    
    {/* member list of the group*/}
    <div className = "member-list">
    <div className="card">
                <img alt="head_portrait" src={logo} style={{width:'100px'}}/>
								<p className="card-text">member name</p>
                <div className="member-manage-drop-btn">
                  <div class="dropdown">
                    <button class="dropbtn">manage</button>
                    <div class="dropdown-content">
                        <a href="#"> move member</a>
                        <a href="#"> set as admin</a>       
                    </div>
                  </div>
                </div>
							</div>
        
            <MemberList/>

    </div>

    {/* next page bar here*/}
    <div class="center-next">
      <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>

    

       
</div>

    );
}

export default MemberListPage;