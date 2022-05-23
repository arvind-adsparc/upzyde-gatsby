import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="container flex-container">
        <div className="logo">
          <img
            src="https://www.upzyde.com/wp-content/uploads/2019/11/logo.png"
            alt=""
          />
        </div>

        <nav className="nav-links">
          <div className="link">HOME</div>
          <div className="link">CHANNELS</div>
          <div className="link">BENEFITS</div>
          <div className="link">HOME</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
