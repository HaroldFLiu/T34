import React from "react";
import ManageDropdownButton from "../ManageDropdownButton";
import "./Member1.css";

function Member1(props) {
  const { ellipse5, className } = props;

  return (
    <div className={`member1-6 ${className || ""}`}>
      <div className="overlap-group-3">
        <div className="rizwhales-1 tienne-normal-black-20px">rizwhales</div>
        <img className="ellipse-5-1" src={ellipse5} />
      </div>
      <ManageDropdownButton />
    </div>
  );
}

export default Member1;
