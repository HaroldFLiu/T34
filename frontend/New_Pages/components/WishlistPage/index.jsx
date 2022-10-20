import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import Cookie from 'universal-cookie';
import { useParams } from "react-router-dom";
import ProductComponents from "../ProductComponents";
import PageNext from "../PageNextBar/PageNext";
import NavBar from "../NavBarComponent";
import SortBy from "../SortByComponent";
import WishlistComponent from "../WishlistComponent";
import "./Wishlist.css"
const SellPage = () => {
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
  const searchBy = queryParams.get("searchBy");
  //console.log(categoryId);
  
  useEffect(() => {
    axios.get(`/favourites/${userId}`)
      .then(res => {
        var tmp = res.data;

        //search filter logic
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
        //console.log(tmp);
      }

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
      //.then(fetchData())
  }, [])

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)

  console.log(data);
  return (
  <div className="parent" >
     {/* top nav bar*/}
    <NavBar />

    {/* products display*/} 
    <div class="main-wishlist">
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
