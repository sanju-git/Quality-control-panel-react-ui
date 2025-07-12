import React from "react";
import SummaryPanel from "./Charts/SummaryPanel";
import OperationCard from "./Charts/OperationCard";
import GaugeChart from "./Charts/GuageChart";
import QualityDasboardFilters from "./QualityDasbhoardFilters";
import "./QualityControlDashboard.css";
import { ReactComponent as SettingsIcon } from "./../../assets/icons/settings-icon.svg";
import { useLocation, useNavigate } from "react-router-dom";

const dataJSON = {
  overallQuality: {
    gauge: {
      value: 66.6,
      thresholds: [20, 40, 60, 80, 100],
      colors: ["#c6e48b", "#fdec84", "#f7b267", "#f77464", "#e63946"],
    },
    summary: {
      totalProduced: 120,
      qcFailed: 40,
      failureRate: "66.6",
    },
  },
  operations: [
    {
      opCode: "OP 40",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#5CB338",
    },
    {
      opCode: "OP 110",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#5CB338",
    },
    {
      opCode: "OP 402",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#5CB338",
    },
    {
      opCode: "OP 420",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#5CB338",
    },
    {
      opCode: "OP 4011",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#EA2F14",
    },
    {
      opCode: "OP 120",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#EA2F14",
    },
    {
      opCode: "OP 120",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#EA2F14",
    },
    {
      opCode: "OP 120",
      totalProduced: 120,
      qcFailed: 10,
      failureRate: "8%",
      statusColor: "#EA2F14",
    },
  ],
};

const Dashboard = () => {
  const { gauge, summary } = dataJSON.overallQuality;
  const navigate = useNavigate();
  const location = useLocation();

  const openOPCardChart = (opCardName) => {
    const newPath = `${location.pathname.replace(/\/$/, "")}/${opCardName}`;
    navigate(newPath);
  };

  const showPartHistory = () => {
    const newPath = `${location.pathname.replace(/\/$/, "")}/part-history`;
    navigate(newPath);
  };

  return (
    <div className="container-fluid py-3" style={{ fontFamily: "Arial" }}>
      <div className="row g-4 d-flex align-items-stretch">
        <div className="col-12 col-md-4 h-100">
          <div className="h-100">
            <GaugeChart
              value={gauge.value}
              thresholds={gauge.thresholds}
              colors={gauge.colors}
            />
          </div>
        </div>
        <div className="col-12 col-md-4 h-100">
          <div className="h-100">
            <SummaryPanel {...summary} />
          </div>
        </div>
        <div className="col-12 col-md-4 h-100">
          <div className="h-100 d-flex flex-column justify-content-between">
            <QualityDasboardFilters />
            <div
              onClick={() => showPartHistory()}
              className="title mt-2 d-flex align-items-center justify-content-center cursor-pointer"
            >
              <SettingsIcon width="30" height="30" />
              &nbsp;<h5 className="mb-0">Part history</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="qd-cards mt-4">
        {dataJSON.operations.map((op, index) => (
          <OperationCard
            key={index}
            {...op}
            openOPCardChart={openOPCardChart}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
