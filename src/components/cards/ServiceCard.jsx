import React from "react";
import shirt from "../../images/shirt.png";

const ServiceCard = () => {
  return (
    <div className="ServiceCard">
      <div className="ServiceCard-flex">
        <div className="ServiceCard-text">
          <div className="ServiceCard-top">
            <div className="ServiceCard-line"></div>
            <p>Halloween</p>
          </div>
          <h3>October 31, 2023</h3>
          <br />
          <div className="ServiceCard-icon">✧✧✧✧✧</div>
        </div>
        <div className="ServiceCard-image">
          <img src={shirt} height="60px" width="60px" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
