import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";
import { Link } from "gatsby";

const Header = ({ customNavbar }) => {
  const handleClick = (selector) => {
    const header = window.document.querySelector(".page-header");

    const headerHeight = header.offsetHeight;

    const element = document.querySelector(selector).offsetTop - headerHeight;

    window.scrollTo({ top: element, behavior: "smooth" });
  };

  return (
    <header className="page-header">
      <div className="container flex-container">
        <div className="logo">
          <StaticImage
            className=""
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653636384/Upzyde/logo_amq5gi.png"
            alt="Upzyde"
            title="Upzyde"
            placeholder="none"
          />
        </div>

        {customNavbar ? (
          <div className="back-link">
            <Link to="/">&larr; Back to Home</Link>{" "}
          </div>
        ) : (
          <>
            <div className="mobile-nav">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav className="nav-links desktop-nav flex-container">
              <div
                className="link"
                hero-section
                onClick={() => handleClick(".hero-section")}
                role="button"
              >
                Home
              </div>
              <div
                className="link"
                onClick={() => handleClick(".channels-section")}
                role="button"
              >
                Channels
              </div>
              <div
                className="link"
                onClick={() => handleClick(".benefits-section")}
                role="button"
              >
                Benefits
              </div>
              <div
                className="link"
                onClick={() => handleClick(".contact-section")}
                role="button"
              >
                Contact
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
