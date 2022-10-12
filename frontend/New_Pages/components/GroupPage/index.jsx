import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./GroupPage.css";
import GroupComponents from "../GroupComponents";
import SideNav from "../SideNavComponent";
import Cookie from 'universal-cookie';
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


const GroupPage = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);


  useEffect(() => {
      axios.get('/groups')
          .then(res => {
                  setData(res.data);
                  setLoading(false);
                  
              })
              .catch(() => {
                  alert('There was an error while retrieving the data')
              })
              .then(fetchData())
  }, [])

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)




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

    console.log(user.first);
  return (
<div className="parent" >
     {/* top nav bar*/}
     <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <Link to={`/sell-page/${user.user_id}`}> Sell </Link>
        <a class="active" href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
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
      {/* side bar*/} 
      <a href="/create-group-page" >
          <button class="btn btn-success"> Create New Group</button>
      </a>
  
  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> Suggested Groups:</div>
      <hr />
      <div className="number-listings"> 1234, 5678 groups 
      
          {/* sort by button drop down*/} 
    <div className="move-drop-btn">
      <div class="dropdown">
                <button class="dropbtn">Sort by: Default</button>
                <div class="dropdown-content">
                    <a href="#">Members: High-Low</a>
                    <a href="#">Members: Low-High</a>       
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
        {/* insert groupscomponent here */}
        <GroupComponents data={currentRecords}/> 
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

export default GroupPage;
