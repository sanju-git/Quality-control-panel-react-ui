import BlocksContainer from "./Blocks/BlocksContainer";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="app-container">
      <BlocksContainer onBlockSelect={props.setBlock} />
    </div>
  );
};

export default Home;