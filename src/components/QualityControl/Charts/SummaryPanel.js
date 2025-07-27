import React from "react";
import "./SummaryPanel.css";

const SummaryPanel = ({ metaData }) => {
  let { totalProduced, qcFailed, failureRate, totalOK } = metaData;
  return (
    <div className="d-flex">
      <div className="col-md-3 summary-panel-card mx-1">
        <strong className="text-center">
          <pre>TOTAL PARTS PRODUCED</pre>
        </strong>
        <div className="row text-center mt-3 g-0">
          <h1>
            <strong>{totalProduced}</strong>
          </h1>
        </div>
      </div>

      <div
        className={
          "col-md-3 summary-panel-card mx-1 " +
          (totalOK > qcFailed ? "green-card" : "red-card")
        }
      >
        <strong className="text-center">
          <pre>OK PARTS</pre>
        </strong>
        <div className="row text-center mt-3 g-0">
          <h1>
            <strong>{totalOK}</strong>
          </h1>
        </div>
      </div>

      <div
        className={
          "col-md-3 summary-panel-card mx-1 " +
          (totalOK > qcFailed ? "green-card" : "red-card")
        }
      >
        <strong className="text-center">
          <pre>NOK PARTS</pre>
        </strong>
        <div className="row text-center mt-3 g-0">
          <h1>
            <strong>{qcFailed}</strong>
          </h1>
        </div>
      </div>

      <div
        className={
          "col-md-3 summary-panel-card mx-1 " +
          (failureRate <= 50 ? "green-card" : "red-card")
        }
      >
        <strong className="text-center">
          <pre>FAILURE RATE</pre>
        </strong>
        <div className="row text-center mt-3 g-0">
          <h1>
            <strong>{failureRate}%</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
