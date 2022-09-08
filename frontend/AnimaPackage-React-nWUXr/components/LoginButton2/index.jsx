import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./LoginButton2.css";

function LoginButton2() {
  return (
    <Link to="/login-page">
      <div className="login-button">
        <Antd.Button size="large" type="default" shape="default" disabled={false}>
          LOGIN
        </Antd.Button>
      </div>
    </Link>
  );
}

export default LoginButton2;
