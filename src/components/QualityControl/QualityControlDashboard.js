import React, { useState } from "react";
import SummaryPanel from "./Charts/SummaryPanel";
import OperationCard from "./Charts/OperationCard";
import GaugeChart from "./Charts/GuageChart";
import QualityDasboardFilters from "./QualityDasbhoardFilters";
import "./QualityControlDashboard.css";
import { ReactComponent as SettingsIcon } from "./../../assets/icons/settings-icon.svg";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

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
  ],
};

const Dashboard = () => {
  const { gauge, summary } = dataJSON.overallQuality;
//   const [OPName, SetOPName] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const openOPCardChart = (opCardName) => {
    // SetOPName(opCardName);
    const newPath = `${location.pathname.replace(/\/$/, "")}/${opCardName}`;
    navigate(newPath);
  };

  //   const openOPCardChart = (opCardName) => {
  //     SetOPName(opCardName);
  //     navigate("/" + opCardName);
  //   };
  //   const handleClick = (page) => {
  //     // setShowNavigationTabs(true);
  //     if (page === "pt") {
  //       navigate("/part/" + blockName);
  //     } else if (page === "qd") {
  //       navigate("/quality-dashboard/" + blockName);
  //     }
  //   };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <div style={{ display: "flex", gap: "2rem" }}>
        <GaugeChart
          value={gauge.value}
          thresholds={gauge.thresholds}
          colors={gauge.colors}
        />
        <SummaryPanel {...summary} />
        <div style={{ width: "45%" }}>
          <QualityDasboardFilters />
          <div className="title mt-1 d-flex align-items-center justify-content-center">
            <SettingsIcon width="30" height="30" />
            &nbsp;
            <h5>Part history</h5>
          </div>
        </div>
      </div>

      <div className="qd-cards">
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
