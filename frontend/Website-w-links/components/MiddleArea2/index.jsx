import React from "react";
import "./MiddleArea2.css";

function MiddleArea2(props) {
  const { myGroups, joinGroup1, joinGroup2, joinGroup3, className } = props;

  return (
    <div className={`middle-area-2 ${className || ""}`}>
      <div className="flex-col-6">
        <div className="my-groups tienne-normal-black-30px">{myGroups}</div>
        <div className="overlap-group4-2"></div>
        <div className="overlap-group-9">
          <div className="overlap-group-10">
            <div className="join-group tienne-normal-black-12px">{joinGroup1}</div>
          </div>
          <div className="marketplace-sellers-31-k-members tienne-bold-black-15px">
            <span className="span-2 tienne-bold-black-15px">
              Marketplace Sellers
              <br />
            </span>
            <span className="span-2 tienne-normal-black-15px">31K members</span>
          </div>
        </div>
        <div className="rectangle-5"></div>
      </div>
      <div className="flex-col-4">
        <img className="rectangle-6" src="/img/rectangle-4-4@2x.png" />
        <div className="overlap-group-9">
          <div className="overlap-group-10">
            <div className="join-group tienne-normal-black-12px">{joinGroup2}</div>
          </div>
          <div className="marketplace-sellers-31-k-members tienne-bold-black-15px">
            <span className="span-2 tienne-bold-black-15px">
              Marketplace Sellers
              <br />
            </span>
            <span className="span-2 tienne-normal-black-15px">31K members</span>
          </div>
        </div>
        <div className="rectangle-5"></div>
      </div>
      <div className="flex-col-4">
        <img className="rectangle-6" src="/img/rectangle-5-4@2x.png" />
        <div className="overlap-group2-3">
          <div className="overlap-group-10">
            <div className="join-group tienne-normal-black-12px">{joinGroup3}</div>
          </div>
          <div className="marketplace-sellers-31-k-members tienne-bold-black-15px">
            <span className="span-2 tienne-bold-black-15px">
              Marketplace Sellers
              <br />
            </span>
            <span className="span-2 tienne-normal-black-15px">31K members</span>
          </div>
        </div>
        <div className="rectangle-9-1"></div>
      </div>
    </div>
  );
}

export default MiddleArea2;
