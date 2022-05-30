import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className="foot-container">
        <div className="scroll-top" onClick={scrollToTop} aria-hidden="true">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653905614/Upzyde/scrolltoTop_h5ii8h.png"
            alt="Scoll to Top"
            placeholder="none"
          />
        </div>
        <div className="foot-logo">
          <StaticImage
            className=""
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653636384/Upzyde/logo_amq5gi.png"
            alt="Upzyde"
            title="Upzyde"
            placeholder="none"
          />
        </div>

        <div className="social-links">
          <div>
            <a
              href="https://twitter.com/upzyde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                className=""
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653905614/Upzyde/twitter_sht2wt.png"
                alt="Twiiter"
                placeholder="none"
              />
              {/* <TwitterOutlined /> */}
            </a>
          </div>

          <div>
            <a
              href="https://www.facebook.com/Upzyde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                className=""
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1653905614/Upzyde/facebook_fvynwg.png"
                alt="Facebook"
                placeholder="none"
              />
              {/* <FacebookFilled /> */}
            </a>
          </div>
        </div>

        <div className="footer-txt">
          <div className="privacy-policy">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="copyright">
            2022 © Copyright. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
