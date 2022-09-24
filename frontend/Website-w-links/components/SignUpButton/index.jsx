import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./SignUpButton.css";
import { Link } from "react-router-dom";

function SignUpButton() {
  return (
  <Link to="/sign-up-page">
    <div className="sign-up-button">
      <Antd.Button size="large" type="default" shape="default" disabled={false}>
        SIGN UP
      </Antd.Button>
    </div>
  </Link>
  );
}

export default SignUpButton;
