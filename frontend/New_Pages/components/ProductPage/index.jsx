import React from "react";
import "./ProductPage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";


const ProductPage = () => {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("/item").then((response) => {
      setPost(response.data);
    });
  }, []);


  return (
    <div> product here</div>

  );
}

export default ProductPage;
