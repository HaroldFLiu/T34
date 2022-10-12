import React, {useEffect, useState}from "react";
import { useParams } from "react-router-dom";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import ProductComponents from "../ProductComponents";

import PageNext from "../PageNextBar/PageNext";

import Cookie from 'universal-cookie';

const CategoryPage = () => {

  //634527f47926a2b8c450db1c

  const [groups, setGroups] = useState([]);


  const fetchGroups = async () => {
    const { data } = await axios.get("/public/634527f47926a2b8c450db1c");
    setGroups(data);
  };


  useEffect(() => {
    fetchGroups();
  }, []);
  
  console.log(groups);


 
  return (
  <div className="parent" >
   123


  </div>

  );
}

export default CategoryPage;
