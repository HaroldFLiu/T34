import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./SortByDropsown.css";

function SortByDropsown() {
  return (
    <div className="sort-by-dropsown">
      <Antd.Cascader
        bordered
        size="middle"
        status={null}
        disabled={false}
        placeholder="Sort By:"
        placement="bottomLeft"
        options={[
          {
            value: "Price low-to-high",
            label: "Price low-to-high",

          },
          {
            value: "Price high-to-low",
            label: "Price high-to-low",

            
          },
        ]}
      />
    </div>
  );
}

export default SortByDropsown;
