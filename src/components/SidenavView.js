import { useState, useEffect } from "react";
import "./SidenavView.css";
import { ReactComponent as MenuClose } from "../../src/assets/icons/collpase.svg";
import { ReactComponent as MenuOpen } from "../../src/assets/icons/expand.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faFlask,
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
      } else if (location.pathname.split("/")[1] === "lab-results") {
        setActiveMenu("lr");
      } else if (location.pathname.split("/")[1] === "reports") {
        setActiveMenu("r");
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

  const navigatePath = (path) => {
    navigate(path);
  };

  return (
    <div className={`sidenav-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="top-icons-container">
        <div className="sidebar-toggle-icon" onClick={toggleSidebar}>
          {isCollapsed ? (
            <MenuClose
              fill="#ffffff"
              width="24"
              height="24"
            />
          ) : (
            <MenuOpen
              fill="#ffffff"
              width="24"
              height="24"
            />
          )}
        </div>
      </div>


      <div className="main-icons-container">
        <div
          onClick={() => navigatePath("/", "home")}
          className={`icon-container ${activeMenu === "home" ? "active-menu" : ""}`}
          title="Home"
          data-tooltip="Home"
        >
          <FontAwesomeIcon
            icon={faHouse}
            style={{ width: '18px', height: '18px' }}
            title={isCollapsed ? "Home" : ""}
          />
          {!isCollapsed && <span className="ml-2">Home</span>}
        </div>
        <div
          onClick={() => navigatePath("/part/" + block, "pt")}
          className={`icon-container ${activeMenu === "pt" ? "active-menu" : ""}`}
          title="Part Traceability"
          data-tooltip="Part Traceability"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ width: '18px', height: '18px' }}
            title={isCollapsed ? "Part Traceability" : ""}
          />
          {!isCollapsed && <span className="ml-2">Part Traceability</span>}
        </div>
        <div
          onClick={() => navigatePath("/lab-results", "lr")}
          className={`icon-container ${activeMenu === "lr" ? "active-menu" : ""}`}
          title="Lab Results"
          data-tooltip="Lab Results"
        >
          <FontAwesomeIcon
            icon={faFlask}
            style={{ width: '18px', height: '18px' }}
            title={isCollapsed ? "Lab Results" : ""}
          />
          {!isCollapsed && <span className="ml-2">Lab Results</span>}
        </div>
        <div
          onClick={() => navigatePath("/quality-dashboard/" + block, "qc")}
          className={`icon-container ${activeMenu === "qc" ? "active-menu" : ""}`}
          title="Quality Control"
          data-tooltip="Quality Control"
        >
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ width: '18px', height: '18px' }}
            title={isCollapsed ? "Quality Control" : ""}
          />
          {!isCollapsed && <span className="ml-2">Quality Control</span>}
        </div>
        <div
          onClick={() => navigatePath("/reports")}
          className={`icon-container ${activeMenu === "r" ? "active-menu" : ""}`}
          title="Reports"
          data-tooltip="Reports"
        >
          <FontAwesomeIcon
            icon={faChartSimple}
            style={{ width: '18px', height: '18px' }}
            title={isCollapsed ? "Reports" : ""}
          />
          {!isCollapsed && <span className="ml-2">Reports</span>}
        </div>
      </div>
    </div>
  );
};

export default SidenavView;
