import React, {useEffect, useState}from "react";
import "./MemberListPage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import MemberList from "../MemberListComponent";
import { useParams } from "react-router-dom";
import Cookie from 'universal-cookie';
import PageNext from "../PageNextBar/PageNext";
import {Link} from "react-router-dom";
import NavBar from "../NavBarComponent";

const MemberListPage = () => {
  const {groupId} = useParams()

  {/*fetch item data*/}

  const [members, setMembers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [firstRender, setFirstRender] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  const fetchMembers = async () => {
    axios.get('/groups/members/'+groupId)
    .then(res => {
      console.log(res);
      setMembers(res.data.members);
      setAdmins(res.data.admins);
      console.log(members);
      console.log(admins);
      setFirstRender(true);
    })
    .catch((error) => {
      console.log(error);
        alert('There was an error while retrieving the data');
    })
  };

  useEffect(() => {
    fetchMembers();
  }, [firstRender]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = members.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(members.length / recordsPerPage)

  {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
  var coookie = new Cookie();
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    //console.log(server_res);
    //const user = server_res.data.user_email;
    const tmp = server_res.data.user_id;
    setUser(tmp);
    console.log(user);
  };

  {/*method to unpack the data and fetch effect*/ }
  useEffect(() => {
    fetchData();
  }, []);

  //search
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = members.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(members)
    }
  }

return (
    <div className="parent" >
     {/* top nav bar*/}
    <NavBar />
    <div class="listings-main">

             {/*Group img   <div className="img-wrap-mem"> <img src={logo} className="popup-img"></img> </div> */} 
    <div class="left-box-mem">
        <div className="square-pic-mem">  
        <img src={logo} className="popup-img"></img>
        </div> 
    </div>
      <div className="shift-title"> <div className="home-title"> Members </div> </div>
          
    </div>
    <hr />
    {/* <div className="number-listings"> {data.length} members</div> */}
    {/* search member button (need fix)*/} 
    <div className = "search-member">
        <input type="text"placeholder="Search Member.." onChange={(e) => searchItems(e.target.value)}> 
            </input>
    </div>
    <br/>
    <hr />


    
    {/* member list of the group*/}
    
    <MemberList data={members}/>
</div>

    );
}

export default MemberListPage;