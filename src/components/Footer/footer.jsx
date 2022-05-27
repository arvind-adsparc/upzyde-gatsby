import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  TwitterOutlined,
  FacebookFilled,
  UpCircleFilled,
} from "@ant-design/icons";

import "./footer.scss";
import { Link } from "gatsby";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className="foot-container">
        <div className="scroll-top">
          <UpCircleFilled onClick={scrollToTop} />
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
              <TwitterOutlined />
            </a>
          </div>

          <div>
            <a
              href="https://www.facebook.com/Upzyde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled />
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
