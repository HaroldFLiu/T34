import React from "react";
import "./MiddleBar.css";

function MiddleBar(props) {
  const { wishlistedItems, x2174913Listings, className } = props;

  return (
    <div className={`middle-bar-2 ${className || ""}`}>
      <div className="wishlisted-items tienne-bold-black-39px">{wishlistedItems}</div>
      <img className="line-3-2" src="/img/line-3@1x.png" />
      <div className="x2174913-listings tienne-normal-black-17px">{x2174913Listings}</div>
      <img className="line-4-2" src="/img/line-3@1x.png" />
    </div>
  );
}

export default MiddleBar;
