import React from "react";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <div>Header Goes here</div>
      <div className="page-content container">{children}</div>
      <div>Footer goes here</div>
    </div>
  );
};

export default Layout;
