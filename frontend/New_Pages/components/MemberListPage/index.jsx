import React, {useEffect, useState}from "react";
import "./MemberListPage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import MemberList from "../MemberList";
import { useParams } from "react-router-dom";
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

const MemberListPage = () => {
  
  {/* TO GET SINGLE ITEM NEED CONDITION TO ACCESS CLICKED ITEMS'S ID*/}
  const {groupId} = useParams()
  //const thisProduct = posts.find(prod => prod.id == productId)
  {/*degub log here */}
  console.log(groupId);

  {/*fetch item data*/}
  
  const [members, setMembers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [data, setData] = useState([]);
  const [firstRender, setFirstRender] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  const fetchData = async () => {
    axios.get('/groups/'+groupId+'/members')
    .then(res => {
      console.log(res);
      setMembers(res.data.members);
      setAdmins(res.data.admins);
      setFirstRender(true);

      console.log(members);
      console.log(admins);
    })
    .catch((error) => {
      console.log(error);
        alert('There was an error while retrieving the data');
    })
  };

  useEffect(() => {
    fetchData();
  }, [firstRender]);

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
//const currentRecords = ["aaa"]; //!need fix
//const nPages = Math.ceil(data.length / recordsPerPage)

  // {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
  // var coookie = new Cookie();
  // const [user, setUser] = useState([]);
  // const fetchData = async () => {
  //   const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
  //   console.log(server_res);
  //   //const user = server_res.data.user_email;
  //   const user = server_res.data;
  //   setUser(user);
  //   //console.log(server_res.data.user_id);
  
  // };
  

  // {/*method to unpack the data and fetch effect*/ }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  //  // log OUT HERE
  //  const handleLogOut = async () => {
  //   await axios.put("/logout", {} ,{withCredentials:true, headers:{'Authorization':coookie.get("token")}})
  //   .then(response => {
  //     if (response.status === 200) {
  //       location.pathname='/login-page';
  //     }
  //   })
  //   .catch(error => {
  //     console.log("Error signing out", error);
  //   });
  // };

  // //search
  // const [searchInput, setSearchInput] = useState('');
  // const [filteredResults, setFilteredResults] = useState([]);
  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //   if (searchInput !== '') {
  //       const filteredData = data.filter((item) => {
  //           return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //       })
  //       setFilteredResults(filteredData)
  //   }
  //   else{
  //       setFilteredResults(data)
  //   }
  //}

return (
    <div className="parent" >
     {/* top nav bar*/}
    <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a href="/my-group-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      {/* need to add logout btn, rn just redirects without sign out*/}
      <a href="/checkout-page"> Cart</a>
   
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>
        
    <div class="listings-main">
      <div className="home-title"> Members </div>
      
    </div>
    <hr />
    {/* <div className="number-listings"> {data.length} members</div> */}
    {/* search member button (need fix)*/} 
    {/* <div className = "search-member">
        <input type="text"placeholder="Search Member.." onChange={(e) => searchItems(e.target.value)}> 
            </input>
    </div> */}
    
    <hr />

       {/*Group img*/}    
    <div class="left-box">
        <div className="square-pic">  
        {/* <div className="img-wrap"> <img src={groups.image_urls} className="popup-img"></img> </div> */}
        </div> 
    </div>
    
    {/* member list of the group*/}
    <div className="wrapper" >
        <div class="row2">
          <div class="column">
            {/* {searchInput.length > 1 ?
            (filteredResults.map((item) => {return }))} */}
          {/* <MemberList data={currentRecords}/>
          <PageNext
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            /> */}
          </div>
        </div>
    </div> 
</div>

    );
}

export default MemberListPage;