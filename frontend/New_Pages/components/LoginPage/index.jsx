import React, {useState}from "react";
import "./Login.css";
import axios from "../../api/axios"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });
  const [error,setError]=useState();

  console.log(values);

  const PostLogin = event => {
    event.preventDefault();
    axios.post('/login', {
    email: values.email,
    password: values.password,
    })
  .then(function (response) {
    console.log(response);
    if (response.status=="200") {
      let token =response.data.token;
      console.log(token);
      cookies.set('token',token,{maxAge:response.data.maxAge, sameSite:response.data.sameSite,secure:response.data.secure, httpOnly: response.data.httpOnly});
      location.pathname='/home-page';
    }
    else if(response.status=="401") {
      setError("Authentication failed. Please check username and password");
      // do something
    }
    else {
      console.log("oops");
    }
  })
  
  //.catch(function (error) {
    //console.log(error);
 // });
 .catch(() => {
  alert('Authentication failed. Please check username and password');
  });
}

  return (
        /*LOGIN FORM HERE*/
      <div> 
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div className="title"> Market34</div>  
          <h3 className="Auth-form-title">Sign In</h3>
          <h3 className="slogan">and start scrolling through the marketplace!</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=> setValues({...values, email:e.target.value})}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=> setValues({...values, password:e.target.value})}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={PostLogin} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Dont have an account? <a href="sign-up-page">Register now!</a>
          </p>
        </div>
      </form>
    </div>
    </div>      

  );
}
export default LoginPage;