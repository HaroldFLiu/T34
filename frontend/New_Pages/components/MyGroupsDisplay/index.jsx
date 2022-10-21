import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Cookie from 'universal-cookie';
import SideNav from "../SideNavComponent";
import NavBar from "../NavBarComponent"
import ProductComponents from "../ProductComponents";
import PageNext from "../PageNextBar/PageNext";
import SortBy from "../SortByComponent";

import "./MyGroupsDisplay.css"
const MyGroupsDisplay = () => {

    // To hold the actual data
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('')

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  const [group, setGroup] = useState({});
  const [firstRender, setFirstRender] = useState(false);
  var coookie = new Cookie();

  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cat_id");
  const sortBy = queryParams.get("sortBy");
  const searchBy = queryParams.get("searchBy");
  const {groupId} = useParams()

  const fetchGroupItems = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;
    setUser(user);

    await axios.get('/groups/items/' + groupId, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      var tmp = res.data;

      if (queryParams.has("searchBy")) {
        const searchedData = [];
        const query_characters = searchBy.toLowerCase().split("");
        tmp.forEach(entry => {
          //console.log(entry.name.toLowerCase().split(""))
          var i = 0, count = 0;
          entry.name.toLowerCase().split("").forEach(character => {
            if (query_characters[i] == character) {
              count++;
            }
            i++;
          });
          if (count == query_characters.length) {
            console.log(entry.name);
            searchedData.push(entry);
          }
        });
        tmp = searchedData;
      }

      //console.log(res);
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
    .catch((err) => {
      alert(err);
    })

    //.then(fetchData());
  }

  const fetchGroupItemsWithCategory = async () => {
    await axios.get(`/groups/items/${groupId}/category/${categoryId}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
        const tmp = res.data;
        //console.log(res.data);
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
    .catch((err) => {
        alert(err)
    })
    //.then(fetchData())
  }


  {/*method to unpack the data and fetch effect*/ }
  if (categoryId) {
    useEffect(() => {
      fetchGroup();
      fetchGroupItemsWithCategory();
    }, []);
  } else {
    useEffect(() => {
      fetchGroup();
      fetchGroupItems();
    }, []);
  }
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchGroup = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    await axios.get(`/groups/group/${groupId}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      setGroup(res.data);
      setIsAdmin(res.data.admins.includes(user));
    })
  };

  async function removeGroup () {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    //console.log(server_res);
    const user = server_res.data;

    console.log("remove");
    await axios.delete('/groups/'+ groupId, {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    alert("Group has been deleted!");
    location.pathname="/my-groups-page/"+user.user_id;
  };

  async function leaveGroup () {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
   //console.log(server_res);
    const user = server_res.data;
    await axios.patch('/groups/'+ groupId +'/leave/' + user.user_id, {}, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(function (response){
      alert("You left the group!");
      location.pathname="/my-groups-page/"+user.user_id;
    })
  };
  

  const goMember = event => {
    event.preventDefault();
    location.pathname="/member-list-page/"+groupId;
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)

  //console.log(data);
  return (
   <div className="parent" > 
   <NavBar />
   <SideNav />


    <div className="popup-box-display">
      <div className="display-box">
        <div className="display-square-popup">
          <img src={group.icon_url} className="popup-img"></img> 
        </div>
        <div className="popup-text"> 
        </div>
        <div className="header-popup-display">{group.name} 
          <button onClick={goMember}> Member's List</button>
          {isAdmin && <button className="remove-leave" onClick={() => removeGroup()}> Remove Group</button>}
          {!isAdmin && <button className="remove-leave" onClick={() => leaveGroup()}> Leave Group</button>}
        </div> 


        <hr className="hr-line"/>

        
        <div className="number-group-listings"> 
          <hr />
          {data.length} listings 
          <SortBy/>
          <hr />
        </div> 

       {/* <div className="component-display"> INSERT MY GROUPS COMPONENT ITEM DISPLAY HERE</div> */}
        <br/>
       <div className="wrapper" >
          <div class="row2">
            <div class="column">

            <ProductComponents data={currentRecords} userId={user}/> 
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
};
 
export default MyGroupsDisplay;