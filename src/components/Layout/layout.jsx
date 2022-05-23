import React from "react";
import Header from "../Header/header";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="page-content container">{children}</div>
      <div>Footer goes here</div>
    </div>
  );
};

export default Layout;
