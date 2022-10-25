import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import Cookies from 'universal-cookie';
const coookie = new Cookies();
import { useParams } from "react-router-dom";
import ProductComponents from "../ProductComponents";
import PageNext from "../PageNextBar/PageNext";
import NavBar from "../NavBarComponent";
import SideNav from "../SideNavComponent";
import SellComponent from "../SellComponent";
import SortBy from "../SortByComponent";

import { AiFillPlusCircle } from "react-icons/ai";

const SellPage = () => {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  // get parameters
  const {sellerId} = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cat_id");
  const sortBy = queryParams.get("sortBy");
  const searchBy = queryParams.get("searchBy");
  
  if (!categoryId) {
    useEffect(() => {
      // get seller's items
      axios.get(`/items/${sellerId}`, {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
      .then(res => {
        var tmp = res.data;

        // search filter logic
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
      .catch(() => {
          alert('There was an error while retrieving the data')
      })
    }, [])
  } else {
    useEffect(() => {
      // get seller's items by category
      axios.get(`/items/${sellerId}/${categoryId}`, 
        {withCredentials:true, headers:{'Authorization':coookie.get("token")}})
      .then(res => {
        var tmp = res.data;

        // search filter logic
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
      .catch(() => {
          alert('There was an error while retrieving the data')
      })
    }, []);
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
      <span className="add-new"><a href="/new-listings-page"> <AiFillPlusCircle className="add-icon"/></a></span>
    </div> 
  </div>
  );
}

export default SellPage;
