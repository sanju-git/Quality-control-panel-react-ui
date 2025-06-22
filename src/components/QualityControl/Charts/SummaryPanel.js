import React from "react";
import "./SummaryPanel.css";

const SummaryPanel = ({ totalProduced, qcFailed, failureRate }) => (
  <div className="summary-panel-card">
    <div>
      <h3 className="text-center">Overall Quality</h3>
    </div>
    <div
      className="my-1"
      style={{
        height: "5px",
        width: "relative",
        background: failureRate > 50 ? "#EA2F14" : "#5CB338",
      }}
    ></div>
    <div className="summary-panel-container d-flex mt-2">
      <div
        className="summary-panel-quality-card text-center"
        style={{ borderRight: "2px solid grey" }}
      >
        <div>{totalProduced}</div>
        <div className="mt-1">
          <span>
            <strong
              style={{ color: totalProduced > 50 ? "#5CB338" : "#EA2F14" }}
            >
              Total Produced
            </strong>
          </span>
        </div>
      </div>
      <div
        className="summary-panel-quality-card text-center"
        style={{ borderRight: "2px solid grey" }}
      >
        <div>{qcFailed}</div>
        <div className="mt-1">
          <span>
            <strong>QC Failed</strong>
          </span>
        </div>
      </div>
      <div className="summary-panel-quality-card text-center">
        <div>{failureRate}%</div>
        <div className="mt-1">
          <span>
            <strong>Failure Rate</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default SummaryPanel;
