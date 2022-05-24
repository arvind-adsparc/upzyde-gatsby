import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./overview.scss";

const Overview = () => {
  return (
    <section className="overview-section">
      <div className="inner-container">
        <h2>
          Upzyde offers an omni-channel header bidding solution built to
          maximise publisher yield
        </h2>
        <h3>Increase your yield by up to 50%!</h3>

        <div className="section-content">
          <div className="content-txt">
            <p>
              In only a short amount of time header bidding technology has taken
              the market by storm. Starting out as what many referred to as a
              hack, header bidding technology has evolved into the preferred way
              publishers maximise their programmatic yield.
            </p>

            <div className="divider"></div>
            <p>
              Upzyde is a header bidding specialist working closely with
              publishers to analyse, implement and manage header bidding
              monetisation solutions. We focus on the heavy lifting of what
              needs to be done to make header bidding successful.
            </p>
          </div>

          <div className="content-img">
            <StaticImage
              className=""
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653377660/Upzyde/yield-performance_qydvhb.webp"
              //   src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653377661/Upzyde/yield-performance2_xcwwyk.webp"
              alt="Yield Performance"
              title="Yield Performance"
              placeholder="none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
