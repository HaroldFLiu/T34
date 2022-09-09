import React from "react";
import "./MiddleBar3.css";

function MiddleBar3(props) {
  const { wishlistedItems, x2174913Listings } = props;

  return (
    <div className="middle-bar-7">
      <div className="groups-9 tienne-bold-black-39px">{wishlistedItems}</div>
      <img className="line-3-7" src="/img/line-3@1x.png" />
      <div className="group-container-3">
        <div className="x2174913-groups-4 tienne-normal-black-17px">{x2174913Listings}</div>
        <div className="overlap-group8-1">
          <div className="sort-by-default">Sort By: Default</div>
          <img className="polygon-2" src="/img/polygon-2@2x.png" />
        </div>
      </div>
      <img className="line-4-7" src="/img/line-3@1x.png" />
    </div>
  );
}

export default MiddleBar3;
