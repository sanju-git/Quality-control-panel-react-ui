// components/OperationCard.js
import React from "react";
import "./OperationCard.css";

const OperationCard = ({
  opCode,
  totalProduced,
  qcFailed,
  failureRate,
  statusColor,
  openOPCardChart
}) => (
  <div
    className="op-card cursor-pointer"
    style={{
      //   border: `2px solid ${statusColor}`,
      borderRadius: "10px",
      padding: "1rem",
      width: "180px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    }}
    onClick={() => openOPCardChart(opCode)}
  >
    <h4>{opCode}</h4>
    <div
      className="my-1"
      style={{ height: 4, width: "relative", background: `${statusColor}` }}
    ></div>
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      {totalProduced}
      <br />
      <br />
      <strong>Total Produced</strong>
    </div>
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      {qcFailed}
      <br />
      <br />
      <strong>QC Failed</strong>
    </div>
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      {failureRate}
      <br />
      <br />
      <strong>Failure Rate</strong>
    </div>
  </div>
);

export default OperationCard;
