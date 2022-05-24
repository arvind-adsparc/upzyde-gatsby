import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="container flex-container">
        <div className="logo">
          <StaticImage
            className=""
            src="https://www.upzyde.com/wp-content/uploads/2019/11/logo.png"
            alt="Upzyde"
            title="Upzyde"
            placeholder="none"
          />
        </div>

        <nav className="nav-links flex-container">
          <div className="link">Home</div>
          <div className="link">Channels</div>
          <div className="link">Benefits</div>
          <div className="link">Contact</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
