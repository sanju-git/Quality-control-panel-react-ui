import React, { useEffect, useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    if (location.pathname.split("/").length > 1) {
      if (location.pathname.split("/")[3] === "part-history") {
        setPageName("Part History");
      } else if (location.pathname.split("/")[1] === "part") {
        setPageName("Part Traceability");
      } else if (location.pathname.split("/")[1] === "quality-dashboard") {
        setPageName("Quality Control");
      } else if (location.pathname.split("/")[1] === "lab-results") {
        setPageName("Lab Results");
      } else if (location.pathname.split("/")[1] === "reports") {
        setPageName("Reports");
      } else if (location.pathname.split("/")[1] === "") {
        setPageName("");
      }
    }
  }, [location]);
  return (
    <div className="header">
      <div className="header-left">
        {pageName && pageName.length >= 1 && (
          <div className="page-name">
            <div className="back-button-wrapper" onClick={() => navigate(-1)} title="Go Back">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <h5 className="page-title-text">{pageName}</h5>
          </div>
        )}
      </div>

      <div className="header-logo">
        <img
          className="craftsman-logo-image"
          src={require(`./../assets/images/craftsman-logo.png`)}
          alt="Craftsman Logo"
        />
      </div>
    </div>
  );
};

export default Header;
