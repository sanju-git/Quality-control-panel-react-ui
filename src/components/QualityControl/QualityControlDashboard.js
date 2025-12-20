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
    console.log(location.pathname.split("/"));
    await getQCData(fromDate, toDate).then((response) => {
      if (response.success) {
        console.log(response);
        setMetaData(response.metadata);
        setOPData(response.data);
      } else {
        setMetaData([]);
        setOPData([]);
      }
    });
  };

  return (
    <div className="container-fluid dashboard-container">
      <div className="col-12 mb-4">
        <QualityDashboardFilters
          applyFilters={applyFilters}
          showPartHistory={showPartHistory}
        />
      </div>

      {metaData &&
        Object.entries(metaData).length >= 1 &&
        opData &&
        opData.length >= 1 ? (
        <>
          <div className="dashboard-section">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center border-end-md">
                <GaugeChart
                  value={metaData.overallQuality}
                  thresholds={gauge.thresholds}
                  colors={gauge.colors}
                />
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <SummaryPanel metaData={metaData} />
              </div>
            </div>
          </div>

          <div className="cards-area-wrapper">
            <h4 className="section-title">Quality by Operation</h4>
            <div className="qd-cards">
              {opData.map((op, index) => (
                <OperationCard key={index} op={op} openOPCardChart={openOPCardChart} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center p-5 text-muted">
          <p>No data available for the given selection.</p>
        </div>
      )}

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
