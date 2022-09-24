import React from "react";
import "./ImageAdd.css";

function ImageAdd(props) {
  const { className } = props;

  return (
    <div className={`image-add ${className || ""}`}>
      <img className="icon-gallery-1" src="/img/ellipse-3@2x.png" />
    </div>
  );
}

export default ImageAdd;
