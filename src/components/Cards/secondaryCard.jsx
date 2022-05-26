import React from "react";
import "./secondaryCard.scss";

const SecondaryCard = ({ title, description }) => {
  return (
    <div className="sec-cardContainer">
      <div className="card-title">{title}</div>

      <div className="card-txt">{description}</div>
    </div>
  );
};

export default SecondaryCard;
