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
  useEffect(() => {
    const initialValue = document.body.style.zoom;

    // Change zoom level on mount
    document.body.style.zoom = "80%";

    return () => {
      // Restore default value
      document.body.style.zoom = initialValue;
    };
  }, []);
  
  var coookie = new Cookie();

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('')

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  const [group, setGroup] = useState({});
  const [firstRender, setFirstRender] = useState(false);

  // get parameters
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cat_id");
  const sortBy = queryParams.get("sortBy");
  const searchBy = queryParams.get("searchBy");
  const {groupId} = useParams()

  // function to get group items
  const fetchGroupItems = async () => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;
    setUser(user);

    await axios.get('/groups/items/' + groupId, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      var tmp = res.data;

      // search bar logic
      if (queryParams.has("searchBy")) {
        const searchedData = [];
        const query_characters = searchBy.toLowerCase().split("");
        tmp.forEach(entry => {
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

      // sort by logic
      if (sortBy == 'oldest') {
        setData(tmp);
      } else if (sortBy == 'desc') {
        setData(tmp.sort((a, b) => b.price - a.price));
      } else if (sortBy == 'asc') {
        setData(tmp.sort((a, b) => a.price - b.price));
      } else {
        setData(tmp.reverse());
      }
      setLoading(false);
    })
    .catch((err) => {
      alert(err);
    })
  }

  // function to get group items by category
  const fetchGroupItemsWithCategory = async () => {
    await axios.get(`/groups/items/${groupId}/category/${categoryId}`, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      var tmp = res.data;
      // search bar logic
      if (queryParams.has("searchBy")) {
        const searchedData = [];
        const query_characters = searchBy.toLowerCase().split("");
        tmp.forEach(entry => {
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

      // sort by logic
      if (sortBy == 'oldest') {
        setData(tmp);
      } else if (sortBy == 'desc') {
        setData(tmp.sort((a, b) => b.price - a.price));
      } else if (sortBy == 'asc') {
        setData(tmp.sort((a, b) => a.price - b.price));
      } else {
        setData(tmp.reverse());
      }
      setLoading(false);
    })
    .catch((err) => {
        alert(err)
    })
  }

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

  // get group info
  const fetchGroup = async () => {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    await axios.get(`/groups/group/${groupId}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(res => {
      setGroup(res.data);
      setIsAdmin(res.data.admins.includes(user));
    })
  };

  // function to remove group if user is an admin
  async function removeGroup () {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;

    await axios.delete('/groups/'+ groupId, {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    alert("Group has been deleted!");
    location.pathname="/my-groups-page/"+user.user_id;
  };

  // function to leave group
  async function leaveGroup () {
    const server_res = await axios.get("/getuser", 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data;
    await axios.patch('/groups/'+ groupId +'/leave/' + user.user_id, {}, 
      {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(function (response){
      alert("You left the group!");
      location.pathname="/my-groups-page/"+user.user_id;
    })
  };
  
  // function to redirect to member list page
  const goMember = event => {
    event.preventDefault();
    location.pathname="/member-list-page/"+groupId;
  }

  // pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    <div className="parent" > 
      <NavBar />
      <SideNav />

      <div className="popup-box-display">
        <div className="display-box">
          <div className="display-square-popup">
            <img src={group.icon_url} className="popup-img"></img> 
          </div>
          <div className="popup-text"></div>
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