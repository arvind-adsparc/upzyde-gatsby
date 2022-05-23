import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
