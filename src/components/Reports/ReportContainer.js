// ReportsPage.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReportsFilter from "./ReportsFilter";
import ReportsView from "./ReportsView";
import { generateReportAPI } from "../../services/ReportService";

export default function ReportContainer() {
  const [filters, setFilters] = useState({
    operation: [],
    characteristics: [],
    reportType: "",
  });

  const [reportURL, setReportUrl] = useState(null);

  const generateReport = async (filters) => {
    if (
      filters?.operation?.length >= 1 &&
      filters?.characteristics?.length >= 1 &&
      filters?.reportType &&
      filters?.fromDate &&
      filters?.toDate
    ) {
      // assuming you have an API call here
      const response = await generateReportAPI(filters, filters.reportType);


      if (response.success) {
        setReportUrl(response.fileURL);
      } else {
        alert(response.message || "Unable to generate report");
      }
    } else {
      alert("Please select all the filters");
    }
  };

  return (
    <div className="container-fluid h-100 d-flex flex-column" style={{ padding: "0.5rem 2rem 2rem 2rem", overflow: "hidden" }}>
      <div className="row h-100">
        <div className="col-md-4 h-100">
          <div className="h-100 d-flex align-items-center">
            <ReportsFilter filters={filters} setFilters={setFilters} generateReport={generateReport} />
          </div>
        </div>
        <div className="col-md-8 h-100">
          <ReportsView reportURL={reportURL} />
        </div>
      </div>
    </div>
  );
}
