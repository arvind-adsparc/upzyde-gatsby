import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { data } from "./data";
import PrimaryCard from "../Cards/primaryCard";
import "./channels.scss";

const Channels = () => {
  return (
    <section className="channels-section">
      <div className="inner-container">
        <h2>Our Header Bidding Channels</h2>

        <div className="channels-content">
          {data.map((info) => {
            return (
              <PrimaryCard
                key={info.title}
                title={info.title}
                imageUrl={info.imageUrl}
                description={info.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Channels;
