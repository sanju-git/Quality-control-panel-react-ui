import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PartTraceabilityContainer from "./components/PartTraceability/PartTraceabilityContainer";
import QualityControlDashboard from "./components/QualityControl/QualityControlDashboard";
import OPLineChartConatiner from "./components/QualityControl/OPLineChartConatiner";
import PartHistory from "./components/QualityControl/PartHistory/PartHistoryContainer";
import NavigationTab from "./components/Navigation/NavigationTab";
import SidenavContainer from "./components/SidenavContainer";
import { useEffect, useState } from "react";

function App() {
  // const [block, setBlock] = useState(null);
  // const [blockTrigger, setBlockTrigger] = useState(0);
  // const handleBlockSelection = (blockName) => {
  //   setBlock(blockName);
  //   setBlockTrigger((trigger) => trigger + 1);
  // };

  const [block, setBlock] = useState(() => {
    const savedBlock = localStorage.getItem("selectedBlock");
    return savedBlock || null;
  });

  const [blockTrigger, setBlockTrigger] = useState(0);

  useEffect(() => {
    if (block) {
      localStorage.setItem("selectedBlock", block);
    } else {
      localStorage.removeItem("selectedBlock");
    }
  }, [block]);
  const handleBlockSelection = (blockName) => {
    setBlock(blockName);
    setBlockTrigger((trigger) => trigger + 1);
  };
  return (
    <Router>
      <div className="app-wrapper">
        <div>
          <SidenavContainer block={block} blockTrigger={blockTrigger} />
        </div>
        <div className="content-container">
          <div className="header-container">
            <Header />
          </div>
          <div className="pt-3" style={{ height: "93%" }}>
            <Routes>
              <Route
                path="/"
                element={<Home setBlock={handleBlockSelection} />}
              />
              <Route path="/block/:blockName" element={<NavigationTab />} />
              <Route path="/part/:id" element={<PartTraceabilityContainer />} />
              <Route
                path="/quality-dashboard/:id/part-history"
                element={<PartHistory />}
              />
              <Route
                path="/quality-dashboard/:id/:OPId"
                element={<OPLineChartConatiner />}
              />
              <Route
                path="/quality-dashboard/:id"
                element={<QualityControlDashboard />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
