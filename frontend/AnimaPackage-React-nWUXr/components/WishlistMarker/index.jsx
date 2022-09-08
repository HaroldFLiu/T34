import React from "react";
import "./WishlistMarker.css";

function WishlistMarker(props) {
  const { iconStar1, iconStar2, iconStar3 } = props;

  return (
    <div className="wishlist-marker">
      <img className="icon-star" src={iconStar1} />
      <img className="icon-star-1" src={iconStar2} />
      <img className="icon-star-2" src={iconStar3} />
    </div>
  );
}

export default WishlistMarker;
