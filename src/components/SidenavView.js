import { useState, useEffect } from "react";
import "./SidenavView.css";
import { ReactComponent as MenuClose } from "../../src/assets/icons/collpase.svg";
import { ReactComponent as MenuOpen } from "../../src/assets/icons/expand.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const SidenavView = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  let { block, blockTrigger } = props;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (block && block !== "none") {
      setIsCollapsed(false);
    }
  }, [block, blockTrigger]);

  useEffect(() => {
    // console.log("Current path:", location.pathname);
    if (location.pathname.split("/").length > 1) {
      if (location.pathname.split("/")[1] === "part") {
        setActiveMenu("pt");
      } else if (location.pathname.split("/")[1] === "quality-dashboard") {
        setActiveMenu("qc");
      } else if (location.pathname.split("/")[1] === "") {
        setActiveMenu("home");
      }
    }
  }, [location]);

  const toggleSidebar = () => {
    if (block && block.length >= 1) {
      if (isCollapsed) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }
    }
  };

  const navigateAndSetActive = (path, active) => {
    navigate(path);
  };

  return (
    <div className={`sidenav-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="top-icons-container">
        <div onClick={toggleSidebar}>
          {isCollapsed ? (
            <MenuClose
              fill="#ffffff"
              stroke="#ffffff"
              style={{
                height: 40,
                width: 40,
                cursor: "pointer",
                paddingTop: "3px",
                paddingLeft: "3px",
                paddingRight: "3px",
              }}
            />
          ) : (
            <MenuOpen
              fill="#ffffff"
              style={{
                height: 40,
                width: 40,
                cursor: "pointer",
                paddingTop: "3px",
                paddingLeft: "3px",
                paddingRight: "3px",
                marginLeft: "3px",
              }}
            />
          )}
        </div>
      </div>

      {!isCollapsed && (
        <div className="main-icons-container">
          <div
            onClick={() => navigateAndSetActive("/", "home")}
            className={
              activeMenu === "home"
                ? "icon-container cursor-pointer active-menu"
                : "icon-container cursor-pointer"
            }
          >
            <FontAwesomeIcon
              style={{ color: "#fff", height: 18, width: 18 }}
              icon={faHouse}
            />
            &nbsp;&nbsp; Home
          </div>
          <div
            onClick={() => navigateAndSetActive("/part/" + block, "pt")}
            className={
              activeMenu === "pt"
                ? "icon-container cursor-pointer active-menu"
                : "icon-container cursor-pointer"
            }
          >
            <FontAwesomeIcon
              style={{ color: "#fff", height: 18, width: 18 }}
              icon={faMagnifyingGlass}
            />
            &nbsp;&nbsp; Part Traceability
          </div>
          <div
            onClick={() =>
              navigateAndSetActive("/quality-dashboard/" + block, "qc")
            }
            className={
              activeMenu === "qc"
                ? "icon-container cursor-pointer active-menu"
                : "icon-container cursor-pointer"
            }
          >
            <FontAwesomeIcon
              style={{ color: "#fff", height: 18, width: 18 }}
              icon={faCircleCheck}
            />
            &nbsp;&nbsp; Quality Control
          </div>
          <div
            onClick={() => setActiveMenu("d")}
            className={
              activeMenu === "d"
                ? "icon-container cursor-pointer active-menu"
                : "icon-container cursor-pointer"
            }
          >
            <FontAwesomeIcon
              style={{ color: "#fff", height: 18, width: 18 }}
              icon={faChartSimple}
            />
            &nbsp;&nbsp; Reports
          </div>
        </div>
      )}
    </div>
  );
};

export default SidenavView;
