import React from "react";
import "./SummaryPanel.css";

const SummaryPanel = ({ totalProduced, qcFailed, failureRate }) => (
  <div className="summary-panel-card">
    <h5 className="text-center">Overall Quality</h5>

    <div
      className="quality-bar my-2"
      style={{
        background: failureRate > 50 ? "#EA2F14" : "#5CB338",
      }}
    ></div>

    <div className="row text-center mt-3 g-0">
      <div className="col-12 col-md-4 summary-panel-quality-card border-md-end">
        <div>{totalProduced}</div>
        <div className="mt-1">
          <strong
            style={{ color: totalProduced > 50 ? "#5CB338" : "#EA2F14" }}
          >
            Total Produced
          </strong>
        </div>
      </div>
      <div className="col-12 col-md-4 summary-panel-quality-card border-md-end">
        <div>{qcFailed}</div>
        <div className="mt-1">
          <strong>QC Failed</strong>
        </div>
      </div>
      <div className="col-12 col-md-4 summary-panel-quality-card">
        <div>{failureRate}%</div>
        <div className="mt-1">
          <strong>Failure Rate</strong>
        </div>
      </div>
    </div>
  </div>
);

export default SummaryPanel;
