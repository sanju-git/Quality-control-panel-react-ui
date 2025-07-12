import React from "react";
import "./OperationCard.css";

const OperationCard = ({
  opCode,
  totalProduced,
  qcFailed,
  failureRate,
  statusColor,
  openOPCardChart,
}) => (
  <div
    className="op-card cursor-pointer"
    onClick={() => openOPCardChart(opCode)}
  >
    <h5>{opCode}</h5>

    <div
      className="status-bar my-2"
      style={{ backgroundColor: statusColor }}
    ></div>

    <div className="op-metric">
      <div>{totalProduced}</div>
      <strong>Total Produced</strong>
    </div>

    <div className="op-metric">
      <div>{qcFailed}</div>
      <strong>QC Failed</strong>
    </div>

    <div className="op-metric">
      <div>{failureRate}</div>
      <strong>Failure Rate</strong>
    </div>
  </div>
);

export default OperationCard;