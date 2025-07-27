import React from "react";
import "./OperationCard.css";

const OperationCard = (props) => {
  let { op, openOPCardChart } = props;
  let { operationName, total, nokCount, okPercentage, okCount } = op;
  return (
    <div
      className="op-card cursor-pointer"
      onClick={() => openOPCardChart(operationName)}
    >
      <strong>
        <pre>{operationName}</pre>
      </strong>
      <div className="op-metric">
        <strong style={{ fontSize: 30 }}>{total}</strong>
        <br />
        <pre>Total Parts</pre>
      </div>
      <div className="d-flex justify-content-between op-metric green-card my-2">
        <div>
          <pre>OK parts</pre>
        </div>
        <div>{okCount}</div>
      </div>
      <div className="d-flex justify-content-between op-metric red-card my-2">
        <div>
          <pre>NOK parts</pre>
        </div>
        <div>{nokCount}</div>
      </div>
      <div className="d-flex justify-content-between op-metric green-card my-2">
        <div>
          <pre>Success Rate</pre>
        </div>
        <div>{okPercentage + "%"}</div>
      </div>

      <div className="d-flex justify-content-between op-metric red-card my-2">
        <div>
          <pre>Failure Rate</pre>
        </div>
        <div>{(nokCount / total) * 100 + "%"}</div>
      </div>
    </div>
  );
};

export default OperationCard;
