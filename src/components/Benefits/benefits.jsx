import React from "react";
import { data } from "./data";

import PrimaryCard from "../Cards/primaryCard";
import "./benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="inner-container">
        <h2>UPZYDE BENEFITS</h2>

        <div className="benefits-content">
          {data.map((info) => (
            <PrimaryCard key={info.title} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
