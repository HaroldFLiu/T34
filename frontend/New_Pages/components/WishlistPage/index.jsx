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
import SortBy from "../SortByComponent";
import WishlistComponent from "../WishlistComponent";

const SellPage = () => {

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

  const {userId} = useParams()
  //console.log(sellerId);

  const queryParams = new URLSearchParams(window.location.search);
  const sortBy = queryParams.get("sortBy");
  //console.log(categoryId);
  
  useEffect(() => {
    axios.get(`/favourites/${userId}`)
      .then(res => {
        const tmp = res.data;
        //setData(res.data);
        if (sortBy == 'oldest') {
          setData(tmp);
          //console.log('newest');
        } else if (sortBy == 'desc') {
          setData(tmp.sort((a, b) => b.price - a.price));
          //console.log('desc');
        } else if (sortBy == 'asc') {
          setData(tmp.sort((a, b) => a.price - b.price));
          //console.log('asc');
        } else {
          setData(tmp.reverse());
        }
        setLoading(false);
      })
      .catch(() => {
          alert('There are no items in your wishlist')
      })
      .then(fetchData())
  }, [])

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)



  console.log(data);
  return (
  <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <Link onClick={() => {window.location.href=`/sell-page/${user.user_id}`}}> Sell </Link>
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

    {/* products display*/} 
    <div class="main">
      <div className="home-title"> My Wishlist:</div>
      <hr />
      <div className="number-listings"> {data.length} listings 
      
          {/* sort by button drop down*/} 
      <SortBy />
      </div> 
      <hr />
    <div className="products-wrapper">  
    {/* products display 1st row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <WishlistComponent data={currentRecords}/> 
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
