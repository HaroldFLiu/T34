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

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  const [group, setGroup] = useState({});
  const [firstRender, setFirstRender] = useState(false);
  var coookie = new Cookie();

  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cat_id");
  const sortBy = queryParams.get("sortBy");

  const fetchGroupItems = async () => {
    await axios.get('/groups/items/' + groupId)
    .then(res => {
      const tmp = res.data;
      console.log(res);
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
      alert('There was an error while retrieving the data')
    })

    //.then(fetchData());
  }

  const fetchGroupItemsWithCategory = async () => {
    await axios.get(`/groups/items/${groupId}/category/${categoryId}`)
    .then(res => {
        const tmp = res.data;
        console.log(res.data);
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
      //console.log(categoryId);
      //console.log(groupId);
      fetchGroup();
      fetchGroupItemsWithCategory();
      //setFirstRender(true);
    }, []);
  } else {
    useEffect(() => {
      fetchGroup();
      fetchGroupItems();
      //setFirstRender(true);
    }, []);
  }

  const {groupId} = useParams()

  const fetchGroup = async () => {
    await axios.get(`/groups/group/${groupId}`)
    .then(res => {
      setGroup(res.data);
    })
  };

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
          <button> Member's List</button>
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

            <ProductComponents data={currentRecords}/> 
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