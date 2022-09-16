import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./SideSearch22.css";

function SideSearch22() {
  return (
    <div className="side-search">
      <Antd.Input
        bordered
        prefix=""
        suffix=""
        size="middle"
        maxLength={50}
        defaultValue=""
        status="default"
        disabled={false}
        showCount={false}
        placeholder="Search"
      />
    </div>
  );
}

export default SideSearch22;
