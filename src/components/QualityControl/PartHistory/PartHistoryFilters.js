import React from "react";
import "./PartHistoryFilters.css";

const PartHistoryFilters = () => {
  return (
    <div className="part-history-filters">
      <h5 className="text-center">Slicers</h5>
      <div className="row mt-2 gx-2">
        <div className="col-12 col-sm-6 mb-2 mb-sm-0">
          <input type="date" className="form-control" />
        </div>
        <div className="col-12 col-sm-6">
          <input type="date" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default PartHistoryFilters;
