import React from "react";
import PartHistoryFilters from "./PartHistoryFilters";
import PartHistoryView from "./PartHistoryView";
import "./PartHistoryContainer.css";

const PartHistoryContainer = () => {
  return (
    <div className="part-history-container">
      <PartHistoryFilters />
      <PartHistoryView />
    </div>
  );
};

export default PartHistoryContainer;
