import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "./BROWESEBYCATE.css";

function BROWESEBYCATE() {
  return (
    <div className="browese-by-cate">
      <ReactBootstrap.DropdownButton drop="down" variant="light" title="BROWSE BY CATEGORY">
        <ReactBootstrap.Dropdown.Item href="#/action-1">Vechicles</ReactBootstrap.Dropdown.Item>

        <ReactBootstrap.Dropdown.Item href="#/action-2">Apparel</ReactBootstrap.Dropdown.Item>

        <ReactBootstrap.Dropdown.Item href="#/action-3">Classified</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Electronics</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Entertainment</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Family</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Garden and Outdoor</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Hobbies</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Home Goods</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Home Improvement</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Supplies</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Musical Instruments</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Office Supplies</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Pet Supplies</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Sporting Goods</ReactBootstrap.Dropdown.Item>
        <ReactBootstrap.Dropdown.Item href="#/action-3">Toys and Games</ReactBootstrap.Dropdown.Item>
      </ReactBootstrap.DropdownButton>
    </div>
  );
}

export default BROWESEBYCATE;
