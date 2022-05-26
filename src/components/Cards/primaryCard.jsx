import React from "react";
import "./primaryCard.scss";

const PrimaryCard = ({ title, imageUrl, description }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img
          className=""
          src={imageUrl}
          alt={title}
          title={title}
          placeholder="none"
        />
      </div>

      <div className="card-title">{title}</div>

      <div className="card-description">{description}</div>
    </div>
  );
};

export default PrimaryCard;
