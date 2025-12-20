import BlocksContainer from "./Blocks/BlocksContainer";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="app-container">
      <BlocksContainer onBlockSelect={props.setBlock} selectedBlock={props.selectedBlock} />
    </div>
  );
};

export default Home;