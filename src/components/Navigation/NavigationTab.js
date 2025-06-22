import "./NavigationTab.css";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search-icon.svg";
import { ReactComponent as VerifiedIcon } from "./../../assets/icons/verified-icon.svg";
import { useNavigate } from "react-router-dom";

const NavigationTab = ({ blockName }) => {
  const navigate = useNavigate();
  const handleClick = (page) => {
    // setShowNavigationTabs(true);
    if (page === "pt") {
      navigate("/part/" + blockName);
    } else if (page === "qd") {
      navigate("/quality-dashboard/" + blockName);
    }
  };
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="brand-container mx-1">
        <div style={{ padding: 10 }}>
          <img
            className="craftsman-logo-image"
            src={require(`../../assets/images/craftsman-logo.png`)}
          />
        </div>
        <hr />
        <div style={{ padding: 10 }}>
          <img
            className="greenline-logo-image"
            src={require(`../../assets/images/greenline-logo.png`)}
          />
        </div>
      </div>
      <div className="mx-1">
        <div
          onClick={() => handleClick("pt")}
          className="nav-card cursor-pointer d-flex align-items-center justify-content-center my-2"
        >
          <div>
            <i className="cursor-pointer">
              <SearchIcon width="60" height="60" />
            </i>
          </div>
          <div>
            <span>Part Traceability</span>
          </div>
        </div>
        <div
          onClick={() => handleClick("qd")}
          className="nav-card d-flex align-items-center justify-content-center cursor-pointer"
        >
          <div>
            <i className="cursor-pointer">
              <VerifiedIcon width="60" height="60" />
            </i>
          </div>
          <div>
            <span>Quality Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTab;
