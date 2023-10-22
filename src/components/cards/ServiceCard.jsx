import React from "react";
import shirt from "../../images/shirt.png";

const ServiceCard = () => {
  return (
    <div className="ServiceCard_container">
      <div className="ServiceCard_flex">
        <div className="ServiceCard_topText"></div>
        <p>Best Men's Shrit</p>
        <div className="ServiceCard_star">✧✧✧✧✧</div>
      </div>
      <div className="ServiceCard_image">
        <img src={shirt} height="60px" width="60px" />
      </div>
    </div>
  );
};

export default ServiceCard;
