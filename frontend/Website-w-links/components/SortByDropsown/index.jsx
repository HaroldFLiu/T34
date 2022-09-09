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
            value: "zhejiang",
            label: "Zhejiang",

            children: [
              {
                value: "hangzhou",
                label: "Hangzhou",

                children: [
                  {
                    value: "xihu",
                    label: "West Lake",
                  },
                ],
              },
            ],
          },
          {
            value: "jiangsu",
            label: "Jiangsu",

            children: [
              {
                value: "nanjing",
                label: "Nanjing",

                children: [
                  {
                    value: "zhonghuamen",
                    label: "Zhong Hua Men",
                  },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default SortByDropsown;
