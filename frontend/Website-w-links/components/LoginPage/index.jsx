import React from "react";
import LoginForm from "../LoginForm";
import "./LoginPage.css";

function LoginPage(props) {
  const { title, signInAndStartSc } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login-page screen">
        <div className="rectangle-21"> Marketplace</div>
        <div className="top-bar-6">
          <h1 className="title">{title}</h1>
        </div>
        <div className="overlap-group-17">
          <div className="top-bar-7">
            <div className="sign-in-and-start-sc">{signInAndStartSc}</div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
