import React from "react";
import Nav from "./nav.jsx";
import "./layout.css";
import "./variables.css";

const Layout = ({ children }) => {
  return (
    <div className="mainContainer">
      <Nav />
      <div className="pageContainer">
        <main className="sectionContainer">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
