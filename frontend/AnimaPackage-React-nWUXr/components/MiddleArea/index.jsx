import React from "react";
import "./MiddleArea.css";

function MiddleArea(props) {
  const { myWishlist } = props;

  return (
    <div className="middle-area">
      <div className="flex-col-2">
        <div className="my-wishlist tienne-normal-black-30px">{myWishlist}</div>
        <div className="overlap-group-6"></div>
        <div className="prodct-descrip-price">
          <div className="x1595-sanrio-kurumi-plush tienne-bold-black-15px">
            <span className="tienne-bold-black-15px">
              $15.95
              <br />
            </span>
            <span className="tienne-normal-black-15px">Sanrio Kurumi Plush</span>
          </div>
        </div>
        <div className="rectangle-7"></div>
      </div>
      <div className="flex-col">
        <img className="rectangle" src="/img/rectangle-4@2x.png" />
        <div className="prodct-descrip-price">
          <div className="x1095-brown-cat-plush tienne-bold-black-15px">
            <span className="tienne-bold-black-15px">
              $10.95
              <br />
            </span>
            <span className="tienne-normal-black-15px">Brown Cat Plush</span>
          </div>
        </div>
        <div className="rectangle-1"></div>
      </div>
      <div className="flex-col">
        <img className="rectangle" src="/img/rectangle-5@2x.png" />
        <div className="prodct-descrip-price">
          <p className="x1849-samsung-galaxy tienne-bold-black-15px">
            <span className="tienne-bold-black-15px">
              $1849
              <br />
            </span>
            <span className="tienne-normal-black-15px">Samsung Galaxy S21 Ultra 5G 128GB (Silver)</span>
          </p>
        </div>
        <div className="rectangle-1"></div>
      </div>
    </div>
  );
}

export default MiddleArea;
