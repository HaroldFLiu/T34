import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Button.css";

function Button() {
  return (
    <Link to="/my-groups-page">
      <div className="button">
        <Antd.Button size="large" type="default" shape="default" disabled={false}>
          My Group
        </Antd.Button>
      </div>
    </Link>
  );
}

export default Button;
