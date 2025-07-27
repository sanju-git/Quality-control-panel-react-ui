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
      if (location.pathname.split("/")[1] === "part") {
        setPageName("Part Traceability");
      } else if (location.pathname.split("/")[1] === "quality-dashboard") {
        setPageName("Quality Control");
      } else if (location.pathname.split("/")[1] === "") {
        setPageName("");
      }
    }
  }, [location]);
  return (
    <div className="header">
      <div className="mx-3 pt-1 page-name d-flex align-item-center justify-content-center">
        {pageName && pageName.length >= 1 && (
          <>
            <div className="cursor-pointer" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="mx-3">
              <h5>{pageName}</h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
