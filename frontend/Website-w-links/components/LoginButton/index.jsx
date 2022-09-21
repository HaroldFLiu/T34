import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./LoginButton.css";

function LoginButton() {
  return (
    <div className="login-button">
      <Antd.Button size="large" type="default" shape="default" disabled={false}>
        LOGIN
      </Antd.Button>
    </div>
  );
}

export default LoginButton;
