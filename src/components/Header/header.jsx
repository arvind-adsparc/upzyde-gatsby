import React, { useState } from "react";
// import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";
import { Link } from "gatsby";

const Header = ({ customNavbar }) => {
  const [openMobNav, setOpenMobNav] = useState(false);
  const handleClick = (selector) => {
    const header = window.document.querySelector(".page-header");

    const headerHeight = header.offsetHeight;

    const element = document.querySelector(selector).offsetTop - headerHeight;

    window.scrollTo({ top: element, behavior: "smooth" });
  };

  return (
    <header className="page-header">
      <div className="inner-header"></div>
      <div className="container flex-container">
        <div className="logo">
          {/* <StaticImage
            className=""
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653636384/Upzyde/logo_amq5gi.png"
            alt="Upzyde"
            title="Upzyde"
            placeholder="none"
          /> */}
          <img
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
            <div
              onClick={() => setOpenMobNav(!openMobNav)}
              className="mobile-nav"
              aria-hidden="true"
            >
              <span></span>
              <span></span>
              <span></span>

              {openMobNav && (
                <div className="mobile-nav-links">
                  <div
                    onClick={() => handleClick(".hero-section")}
                    className="link"
                    aria-hidden="true"
                  >
                    Home
                  </div>
                  <div
                    className="link"
                    onClick={() => handleClick(".channels-section")}
                    aria-hidden="true"
                  >
                    Channels
                  </div>
                  <div
                    className="link"
                    onClick={() => handleClick(".benefits-section")}
                    aria-hidden="true"
                  >
                    Benefits
                  </div>
                  <div
                    className="link"
                    onClick={() => handleClick(".contact-section")}
                    aria-hidden="true"
                  >
                    Contact
                  </div>
                </div>
              )}
            </div>
            <nav className="nav-links desktop-nav flex-container">
              <div
                className="link"
                hero-section
                onClick={() => handleClick(".hero-section")}
                aria-hidden="true"
              >
                Home
              </div>
              <div
                className="link"
                onClick={() => handleClick(".channels-section")}
                aria-hidden="true"
              >
                Channels
              </div>
              <div
                className="link"
                onClick={() => handleClick(".benefits-section")}
                aria-hidden="true"
              >
                Benefits
              </div>
              <div
                className="link"
                onClick={() => handleClick(".contact-section")}
                aria-hidden="true"
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
