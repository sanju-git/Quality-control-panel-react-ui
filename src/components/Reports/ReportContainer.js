// ReportsPage.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReportsFilter from "./ReportsFilter";
import ReportsView from "./ReportsView";

export default function ReportContainer() {
  const [filters, setFilters] = useState({
    operation: [],
    characteristics: [],
    reportType: "",
    placeholder: "",
  });

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-md-4">
          <div style={{ height: "85vh" }} className="d-flex align-items-center">
            <ReportsFilter filters={filters} setFilters={setFilters} />
          </div>
        </div>
        <div className="col-md-8">
          <ReportsView />
        </div>
      </div>
    </div>
  );
}
