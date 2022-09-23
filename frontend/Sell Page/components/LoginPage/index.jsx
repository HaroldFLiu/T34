import React, {useState}from "react";
import "./Login.css";
import logo from "../../dist/img/t34-logo.jpg";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  console.log(values);

  async function PostLogin(){
    axios.post('/login', {
    email: values.email,
    password: values.password,
  })
  .then(function (response) {
    console.log(response);
    if (response.status=="200") {
      location.pathname='home-page';
    }
    else {
      console.log("oops");
    }
  })
  .catch(function (error) {
    console.log(error);
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