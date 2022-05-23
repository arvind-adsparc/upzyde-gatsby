import React from "react";
import {
  TwitterOutlined,
  FacebookFilled,
  UpCircleFilled,
} from "@ant-design/icons";

import "./footer.scss";

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
          <img
            src="https://www.upzyde.com/wp-content/uploads/2019/11/logo.png"
            alt=""
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
          <div className="privacy-policy">Privacy Policy</div>
          <div className="copyright">
            2022 © Copyright. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
