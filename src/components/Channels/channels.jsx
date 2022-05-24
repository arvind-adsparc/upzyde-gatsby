import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { data } from "./data";

import "./channels.scss";

const Channels = () => {
  return (
    <section className="channels-section">
      <div className="inner-container">
        <h2>Our Header Bidding Channels</h2>

        <div className="channels-content">
          {data.map((info) => {
            return (
              <div className="card-container" key={info.title}>
                <div className="card-img">
                  <StaticImage
                    className=""
                    src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653389420/Upzyde/display_k1kevw.webp"
                    alt={info.title}
                    title={info.title}
                    placeholder="none"
                  />
                </div>

                <div className="card-title">{info.title}</div>

                <div className="card-description">{info.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Channels;
