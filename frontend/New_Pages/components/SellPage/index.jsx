import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import Cookie from 'universal-cookie';
import { useParams } from "react-router-dom";
import ProductComponents from "../ProductComponents";
import PageNext from "../PageNextBar/PageNext";
import NavBar from "../NavBarComponent";
import SideNav from "../SideNavComponent";
import SellComponent from "../SellComponent";
import SortBy from "../SortByComponent";

const SellPage = () => {
  // To hold the actual data
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  const {sellerId} = useParams();
  //console.log(sellerId);

  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cat_id");
  const sortBy = queryParams.get("sortBy");
  //console.log(categoryId);
  
  if (!categoryId) {
    useEffect(() => {
      axios.get(`/items/${sellerId}`)
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
            alert('There was an error while retrieving the data')
        })
        //.then(fetchData())
    }, [])
  } else {
    useEffect(() => {
      axios.get(`/items/${sellerId}/${categoryId}`)
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
            alert('There was an error while retrieving the data')
        })
        //.then(fetchData())
    }, []);
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)

  console.log(currentRecords);
  return (
  <div className="parent" >
    <NavBar />

    <SideNav />
    
    <div class="new">
      <a href="/new-listings-page">
        <button class="btn btn-success"> Sell New Item</button>
      </a>
    </div>

  

  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> My Listings:</div>
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
