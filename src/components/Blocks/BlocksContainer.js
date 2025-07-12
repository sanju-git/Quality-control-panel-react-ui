import "./BlocksContainer.css";
import blocksData from "./../../Data/blocks.json";
import { useState } from "react";
import NavigationTab from "../Navigation/NavigationTab";
import { getBlocksData } from "../../services/DataService";
import { useNavigate } from "react-router-dom";

const BlocksContainer = () => {
  const [showNavigationTabs, setShowNavigationTabs] = useState(false);
  const [blockName, setBlockName] = useState(null);
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const handleClick = (blockName) => {
    // setShowNavigationTabs(true);
    // setBlockName(blockName);
    navigate("/block/" + blockName);
  };

  const getBlocks = async () => {
    await getBlocksData().then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="d-flex">
        <div
          style={{ height: "90vh", width: "60%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <p
              style={{ margin: "0px !important" }}
              className="text-center welcome-text"
            >
              Welcome to
            </p>
            <p className="welcome-text" style={{ margin: "0px !important" }}>
              Quality Control Panel
            </p>
          </div>
        </div>
        <div
          style={{ width: "40%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            {blocksData.map((b) => (
              <div
                key={b.name} // Always add a key
                onClick={() => handleClick(b.name)}
                className="block-card cursor-pointer my-2 d-flex align-items-center"
              >
                <img
                  className="block-image"
                  src={require(`../../assets/images/${b.imageSrc}`)}
                  alt={b.name}
                />
                <h3 style={{ padding: 20 }}>{b.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlocksContainer;
