import React, {useEffect, useState}from "react";

import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import ProductComponents from "../ProductComponents";

import PageNext from "../PageNextBar/PageNext";
/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi' ;
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';

/* category icons */
import {FaCar} from 'react-icons/fa';
import {FaTshirt} from 'react-icons/fa';
import {BsPlugFill} from 'react-icons/bs';
import {MdFamilyRestroom} from 'react-icons/md';
import {IoIosLeaf} from 'react-icons/io';
import {FaChessKnight} from 'react-icons/fa';
import {GiSofa} from 'react-icons/gi';
import {FaHammer} from 'react-icons/fa';
import {FaGuitar} from 'react-icons/fa';
import {FaPenFancy} from 'react-icons/fa';
import {FaDog} from 'react-icons/fa';
import {MdSportsFootball} from 'react-icons/md';
import {MdSmartToy} from 'react-icons/md';
import Cookie from 'universal-cookie';

const CategoryPage = () => {

      // To hold the actual data
      const [data, setData] = useState([])
      const [loading, setLoading] = useState(true);
  
      const [currentPage, setCurrentPage] = useState(1);
      // 10 items displayed per page
      const [recordsPerPage] = useState(10);
  
  
      useEffect(() => {
          axios.get('/public')
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

      //console.log(data);

      {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
      var coookie = new Cookie();
      const [user, setUser] = useState([]);
      const fetchData = async () => {
        const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
        console.log(server_res);
        const user = server_res.data.user_email;
        setUser(user);
      };
    /*
     
      useEffect(() => {
        fetchData();
      }, []);
    */

      console.log({user});
      
 
  return (
  <div className="parent" >
   123


  </div>

  );
}

export default CategoryPage;
