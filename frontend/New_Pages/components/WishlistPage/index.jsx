import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import Cookie from 'universal-cookie';
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
import WishlistComponent from "../WishlistComponent";
import PageNext from "../PageNextBar/PageNext";
import { useParams } from "react-router-dom";

const WishlistPage = () => {

  
    {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
    var coookie = new Cookie();
    const [user, setUser] = useState([]);
    const fetchData = async () => {
      const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
      //console.log(server_res);
      //const user = server_res.data.user_email;
      const user = server_res.data;
      setUser(user);
      //console.log(server_res.data.user_id);
    
    };
    
  
    {/*method to unpack the data and fetch effect*/ }
    useEffect(() => {
      fetchData();
    }, []);


            
    // log OUT HERE
    const handleLogOut = async () => {
      await axios.put("/logout", {} ,{withCredentials:true, headers:{'Authorization':coookie.get("token")}})
      .then(response => {
        if (response.status === 200) {
          location.pathname='/login-page';
        }
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
    };


      
    const {userId} = useParams()
    console.log("user_id: " + user.user_id);

    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    useEffect(() => {
        axios.get(`/favourites/${userId}`)
            .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    alert('There was an error while retrieving the data')
                })
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    //const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord) ;
    const currentRecords = data;
    const nPages = Math.ceil(data.length / recordsPerPage)


  return (
  <div className="parent" >
     {/* top nav bar*/}
     <div class="navbar">
      <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <Link to={`/sell-page/${user.user_id}`}> Sell </Link>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-groups-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a class="active" href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="#"> <button onClick={() => handleLogOut()}> <AiOutlineLock className="icon"/> Log Out </button></a>
      <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
      <a href="/checkout-page"> Cart</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>

   <SideNav />
  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> Wishlisted Items:</div>
      <hr />
      <div className="number-listings"> 1234 listings 
      
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
{/* wishlist component to be added here*/}
        <WishlistComponent data={currentRecords}/> 
      </div>



      
    </div>
    </div>

    </div>

    </div> 


  </div>

  );
}

export default WishlistPage;
