import React, {useEffect, useState}from "react";
import axios from "../../api/axios";
import Cookie from 'universal-cookie';
import { useParams } from "react-router-dom";
import ProductComponents from "../ProductComponents";
import PageNext from "../PageNextBar/PageNext";
import NavBar from "../NavBarComponent";
import SortBy from "../SortByComponent";
import WishlistComponent from "../WishlistComponent";

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


    {/* products display 2nd row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Remove</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Remove</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Remove</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Remove</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card"> 
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <p class="price">$19.95</p>
        <div className="item-cart">
        <h3>Item Name</h3>
        <p><button>Remove</button></p>
        </div>
      </div>
      </div>
    </div>
   
    </div>
    </div>
    {/* next page bar here*/}
    <div class="center-next">
      <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#" class="active">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>

    </div>

    </div> 


  </div>

  );
}

export default SellPage;
