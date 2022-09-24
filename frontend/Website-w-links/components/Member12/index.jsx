import React from "react";
import ManageDropdownButton from "../ManageDropdownButton";
import "./Member12.css";

function Member12(props) {
  const { ellipse5, className, manageDropdownButtonProps } = props;

  return (
    <div className={`member1-8 ${className || ""}`}>
      <div className="overlap-group-4">
        <div className="rizwhales-2 tienne-normal-black-20px">rizwhales</div>
        <img className="ellipse-5-2" src={ellipse5} />
      </div>
      <ManageDropdownButton className={manageDropdownButtonProps.className} />
    </div>
  );
}

export default Member12;
