import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <Antd.Pagination total={50} current={1} pageSize={10} size="default" showSizeChanger disabled={false} />
    </div>
  );
}

export default Pagination;
