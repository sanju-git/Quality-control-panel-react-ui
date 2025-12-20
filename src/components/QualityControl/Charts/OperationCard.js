import React from "react";
import "./OperationCard.css";

const OperationCard = (props) => {
  let { op, openOPCardChart } = props;
  let { operationName, total, nokCount, okPercentage, okCount } = op;
  return (
    <div
      className="op-card cursor-pointer"
      onClick={() => openOPCardChart(operationName)}
      role="button"
      tabIndex={0}
    >
      <div className="op-title">{operationName}</div>

      <div className="op-metric-main">
        <div className="op-metric-value">{total}</div>
        <div className="op-metric-label">Total Parts</div>
      </div>

      <div className="op-detail-row success">
        <span className="detail-label">OK Parts</span>
        <span className="detail-value">{okCount}</span>
      </div>

      <div className="op-detail-row danger">
        <span className="detail-label">NOK Parts</span>
        <span className="detail-value">{nokCount}</span>
      </div>

      <div className="op-detail-row success">
        <span className="detail-label">Rate</span>
        <span className="detail-value">{okPercentage}%</span>
      </div>

      <div className="op-detail-row danger">
        <span className="detail-label">Fail</span>
        <span className="detail-value">{((nokCount / total) * 100).toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default OperationCard;
