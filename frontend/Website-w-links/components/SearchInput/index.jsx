import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./SearchInput.css";

function SearchInput() {
  return (
    <div className="search-input">
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

export default SearchInput;
