import React from "react";
import LazyLoad from "react-lazyload";
import "./primaryCard.scss";

const PrimaryCard = ({ title, imageUrl, description }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <LazyLoad>
          <img
            className=""
            src={imageUrl}
            alt={title}
            title={title}
            placeholder="none"
            loading="lazy"
          />
        </LazyLoad>
      </div>

      <div className="card-title">{title}</div>

      <div className="card-description">{description}</div>
    </div>
  );
};

export default PrimaryCard;
