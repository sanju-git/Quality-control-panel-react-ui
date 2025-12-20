import "./BlocksContainer.css";
import blocksData from "./../../Data/blocks.json";
import { getBlocksData } from "../../services/DataService";
import { useState } from "react";

const BlocksContainer = (props) => {
  const colors = ["#9ECAD6", "#748DAE", "#F5CBCB"];
  const [currentBlock, setCurrentBlock] = useState(null);
  const handleClick = (blockName, index) => {
    props.onBlockSelect(blockName);
    setCurrentBlock(index);
  };

  const getBlocks = async () => {
    await getBlocksData().then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="blocks-wrapper">
      <div className="text-center pt-4">
        <h1 className="welcome-text">
          Welcome to <br /> Quality Control Cockpit
        </h1>
      </div>
      <div className="mt-4 blocks-container-inner">
        <div className="block-select-text">
          <h5>Select a module to continue</h5>
        </div>
        <div className="blocks-grid">
          {blocksData.map((b, index) => (
            <div
              key={b.name}
              onClick={() => handleClick(b.name, index)}
              className={`block-card cursor-pointer ${props.selectedBlock === b.name ? "selected" : ""}`}
              title={`Select ${b.name}`}
            >
              <img
                className="block-image"
                src={require(`../../assets/images/${b.imageSrc}`)}
                alt={b.name}
              />
              <h3 className="block-title">{b.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlocksContainer;
