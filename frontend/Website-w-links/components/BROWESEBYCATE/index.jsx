import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bootstrap from "bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import "./BROWESEBYCATE.css";

function BROWESEBYCATE() {
  return (
    <div className="browese-by-cate">
      <ReactBootstrap.DropdownButton drop="down" variant="light" title="BROWSE BY CATEGORY">
        <ReactBootstrap.Dropdown.Item href="#/action-1">Action 1</ReactBootstrap.Dropdown.Item>

        <ReactBootstrap.Dropdown.Item href="#/action-2">Action 2</ReactBootstrap.Dropdown.Item>

        <ReactBootstrap.Dropdown.Divider />

        <ReactBootstrap.Dropdown.Item href="#/action-3">Action 3</ReactBootstrap.Dropdown.Item>
      </ReactBootstrap.DropdownButton>
    </div>
  );
}

export default BROWESEBYCATE;
