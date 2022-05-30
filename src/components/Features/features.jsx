import React from "react";
import SecondaryCard from "../Cards/secondaryCard";
import { data } from "./data";
import "./features.scss";

const Features = () => {
  return (
    <section className="features-section">
      <div className="inner-container">
        <h2>Key Revenue Boosting Features</h2>

        <div className="features-content">
          {data.map((info) => (
            <SecondaryCard key={info.title} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
