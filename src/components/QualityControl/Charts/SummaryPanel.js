import React from "react";
import "./SummaryPanel.css";

const SummaryPanel = ({ metaData }) => {
  let { totalProduced, qcFailed, failureRate, totalOK } = metaData;
  return (
    <div className="row g-3 h-100">
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="summary-panel-card neutral">
          <div className="summary-label">Total Produced</div>
          <div className="summary-value">{totalProduced}</div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <div className={`summary-panel-card ${totalOK > qcFailed ? "success" : "danger"}`}>
          <div className="summary-label">OK Parts</div>
          <div className="summary-value">{totalOK}</div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <div className={`summary-panel-card ${totalOK > qcFailed ? "danger" : "danger"}`}>
          <div className="summary-label">NOK Parts</div>
          <div className="summary-value">{qcFailed}</div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <div className={`summary-panel-card ${failureRate <= 50 ? "success" : "danger"}`}>
          <div className="summary-label">Failure Rate</div>
          <div className="summary-value">{failureRate}%</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
