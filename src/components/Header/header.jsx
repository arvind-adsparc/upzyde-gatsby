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
