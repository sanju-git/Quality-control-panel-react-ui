import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { ReactComponent as BackIcon } from "./../../src/assets/icons/back-icon.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  // Define your homepage path here
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <div className="header">
      {!isHome && (
        <i className="back-button cursor-pointer" onClick={handleBack}>
          <BackIcon width="30" height="30" fill="#000000" />
        </i>
      )}
      <div className="user-name">
        <h5>Hi there,</h5>
      </div>
    </div>
  );
};

export default Header;
