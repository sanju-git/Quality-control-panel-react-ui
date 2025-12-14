import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="powered-by">Powered by</span>
        <img
          src={require("./../assets/images/greenline-logo.png")}
          alt="Greenline Logo"
          className="footer-logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
