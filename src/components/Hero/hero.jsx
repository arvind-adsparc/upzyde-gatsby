import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-img">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653636304/Upzyde/section01-bg_tqficl.webp"
          alt=""
        />
      </div>
      <div className="hero-content  inner-container">
        <h1>CHANGE IS THE ONLY CONSTANT</h1>

        <p>
          The world around us is constantly changing and the speed at which it
          changes increases rapidly. In this dynamic and challenging
          environment, Upzyde connects the dots to ensure publishers maximise
          yield of their inventory.
        </p>
      </div>
    </section>
  );
};

export default Hero;
