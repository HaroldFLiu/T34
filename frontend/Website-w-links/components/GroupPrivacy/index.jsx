import React from "react";
import "./GroupPrivacy.css";

function GroupPrivacy(props) {
  const { anyoneCanJoinThisGroup, onlyPeopleGivenAc, className } = props;

  return (
    <div className={`group-privacy-1 ${className || ""}`}>
      <div className="privacy-bar2">
        <div className="group-container-1">
          <div className="overlap-group1">
            <div className="public tienne-bold-black-20px">Public</div>
            <div className="ellipse-2"></div>
          </div>
          <p className="anyone-can-join-this-group tienne-normal-black-15px">{anyoneCanJoinThisGroup}</p>
        </div>
      </div>
      <div className="privacy-bar1">
        <div className="overlap-group2">
          <div className="overlap-group-1">
            <div className="private tienne-bold-black-20px">Private</div>
            <div className="ellipse-2-1"></div>
          </div>
          <p className="only-people-given-ac tienne-normal-black-15px">{onlyPeopleGivenAc}</p>
        </div>
      </div>
    </div>
  );
}

export default GroupPrivacy;
