import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import Cookie from 'universal-cookie';
import { useParams } from "react-router-dom";
import ProductComponents from "../ProductComponents";
import PageNext from "../PageNextBar/PageNext";
import {Link} from "react-router-dom";
/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

import SideNav from "../SideNavComponent";
import SellComponent from "../SellComponent";

const SellPage = () => {
  
      {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
      var coookie = new Cookie();
      const [user, setUser] = useState([]);
      const fetchData = async () => {
        const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
        console.log(server_res);
        //const user = server_res.data.user_email;
        const user = server_res.data;
        setUser(user);
        //console.log(server_res.data.user_id);
      
      };
      
    
      {/*method to unpack the data and fetch effect*/ }
      useEffect(() => {
        fetchData();
      }, []);

   

        // To hold the actual data
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(true);
    
        const [currentPage, setCurrentPage] = useState(1);
        // 10 items displayed per page
        const [recordsPerPage] = useState(10);


        const {sellerId} = useParams()
        //console.log(sellerId);

        const queryParams = new URLSearchParams(window.location.search);
        const categoryId = queryParams.get("cat_id");
        console.log(categoryId);

        if (!categoryId) {
          useEffect(() => {
            axios.get(`/items/${sellerId}`)
              .then(res => {
                  setData(res.data);
                  setLoading(false);
              })
              .catch(() => {
                  alert('There was an error while retrieving the data')
              })
              .then(fetchData())
          }, [])
        } else {
          useEffect(() => {
            axios.get(`/items/${sellerId}/${categoryId}`)
              .then(res => {
                  setData(res.data);
                  setLoading(false);
              })
              .catch(() => {
                  alert('There was an error while retrieving the data')
              })
              .then(fetchData())
          }, []);
        
        }
    
        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
        const nPages = Math.ceil(data.length / recordsPerPage)

  return (
  <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <Link onClick={() => {window.location.href=`/sell-page/${user.user_id}`}} class="active"> Sell </Link>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-groups-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="/login-page"> <AiOutlineLock className="icon"/> Log Out</a>
      <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
      <a href="/checkout-page"> Cart</a>
   
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>

    <SideNav />
  <a href="/new-listings-page" >
          <button class="btn btn-success"> Create New Item</button>
      </a>
  
  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> My Listings:</div>
      <hr />
      <div className="number-listings"> {data.length} listings 
      
          {/* sort by button drop down*/} 
    <div className="move-drop-btn">
      <div class="dropdown">
                <button class="dropbtn">Sort by: Default</button>
                <div class="dropdown-content">
                    <a href="#">Price: High-Low</a>
                    <a href="#">Price: Low-High</a>       
                </div>
        </div>
      </div> 
      </div> 
      <hr />
    <div className="products-wrapper">  
    {/* products display 1st row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <SellComponent data={currentRecords}/> 
          <PageNext
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
      </div>

      
    </div>
    </div>


    </div>

    </div> 


  </div>

  );
}

export default SellPage;
