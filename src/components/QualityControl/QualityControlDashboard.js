import React, { useState } from "react";
import SummaryPanel from "./Charts/SummaryPanel";
import OperationCard from "./Charts/OperationCard";
import GaugeChart from "./Charts/GuageChart";
import QualityDashboardFilters from "./QualityDashboardFilters";
import "./QualityControlDashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getQCData } from "../../services/DataService";
import Modal from "../Widgets/Modal";
import OPLineChartConatiner from "./OPLineChartConatiner";
import NewModal from "../Widgets/NewModal";

const Dashboard = () => {
  // const { gauge, summary } = dataJSON.overallQuality;
  const gauge = {
    thresholds: [20, 40, 50, 80, 100],
    colors: ["#fff7f5", "#e84447", "#e84447", "#f5faf6", "#1c9e47"],
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [opData, setOPData] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [showChartPopup, setShowChartPopup] = useState(false);
  const [selectedOPName, setSelectedOPName] = useState(null);

  const openOPCardChart = (opCardName) => {
    // const newPath = `${location.pathname.replace(/\/$/, "")}/${opCardName}`;
    setShowChartPopup(true);
    setSelectedOPName(opCardName);

    // const newPath = `${location.pathname.replace(/\/$/, "")}/${opCardName}`;
    // navigate(newPath);
  };

  const closeModal = () => {
    setShowChartPopup(false);
  };

  const showPartHistory = () => {
    const newPath = `${location.pathname.replace(/\/$/, "")}/part-history`;
    navigate(newPath);
  };

  const applyFilters = async (fromDate, toDate) => {
    await getQCData(fromDate, toDate).then((response) => {
      if (response.success) {
        console.log(response);
        setMetaData(response.metadata);
        setOPData(response.data);
      } else {
        console.log("blah");
      }
    });
  };

  return (
    <div className="container-fluid" style={{ fontFamily: "Arial" }}>
      <div className="col-12 mb-3">
        <div className="h-100 d-flex flex-column justify-content-between">
          <QualityDashboardFilters
            applyFilters={applyFilters}
            showPartHistory={showPartHistory}
          />
        </div>
      </div>
      <div className="row g-4 d-flex align-items-stretch">
        <div className="col-12 col-md-3 h-100">
          <GaugeChart
            value={metaData.overallQuality}
            thresholds={gauge.thresholds}
            colors={gauge.colors}
          />
        </div>
        <div className="col-12 col-md-8 h-100 mt-5">
          <SummaryPanel metaData={metaData} />
        </div>
      </div>

      <div className="mt-4">
        <strong>Quality by Operation</strong>
        <div className="qd-cards mt-1">
          {opData.map((op, index) => (
            <OperationCard op={op} openOPCardChart={openOPCardChart} />
          ))}
        </div>
      </div>
      {showChartPopup && (
        <NewModal
          closePopup={closeModal}
          showHeader={true}
          header={selectedOPName}
        >
          <OPLineChartConatiner selectedOPName={selectedOPName} />
        </NewModal>
      )}
    </div>
  );
};

export default Dashboard;
