import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PartTraceabilityContainer from "./components/PartTraceability/PartTraceabilityContainer";
import QualityControlDashboard from "./components/QualityControl/QualityControlDashboard";
import OPLineChartConatiner from "./components/QualityControl/OPLineChartConatiner";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="header-container">
          <Header />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/part/:id" element={<PartTraceabilityContainer />} />
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
    </Router>
  );
}

export default App;
