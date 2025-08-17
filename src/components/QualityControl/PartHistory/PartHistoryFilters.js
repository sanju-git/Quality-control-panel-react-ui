import React from "react";
import "./PartHistoryFilters.css";

const PartHistoryFilters = () => {
  return (
    <div className="part-history-filters text-center">
      {/* <h5 className="text-center">Slicers</h5> */}
      <strong>Filter by Date Range</strong>
      <div className="mt-2 gx-2 d-flex justify-content-center">
        <div className="mx-2">
          <input type="date" className="form-control" />
        </div>
        <div className="mx-2">
          <input type="date" className="form-control" />
        </div>
        <div className="mt-1">
          <button
            className="btn btn-dark btn-sm mx-2"
            // onClick={handleApply}
            // disabled={!isApplyEnabled}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartHistoryFilters;
