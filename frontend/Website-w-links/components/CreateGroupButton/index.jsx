import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./CreateGroupButton.css";

function CreateGroupButton() {
  return (
    <Link to="/group-creation">
      <div className="create-group-button">
        <Antd.Button size="large" type="default" shape="default" disabled={false}>
          Create Group
        </Antd.Button>
      </div>
    </Link>
  );
}

export default CreateGroupButton;
