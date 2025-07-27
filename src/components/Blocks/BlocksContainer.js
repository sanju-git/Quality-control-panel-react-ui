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
    <>
      <div className="text-center pt-5">
        <h1 className="welcome-text">
          Welcome to <br /> Quality Control Cockpit!
        </h1>
      </div>
      <div className="mt-5 blocks-container">
        <div className="text-center block-select-text mb-3">
          <h5>Please select a block to continue..</h5>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          {blocksData.map((b, index) => (
            <div
              key={b.name}
              onClick={() => handleClick(b.name, index)}
              className={"block-card cursor-pointer d-flex align-items-center mx-3 mt-3"}
              style={{
                backgroundColor: colors[index % colors.length],
              }}
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
    </>
  );
};

export default BlocksContainer;
