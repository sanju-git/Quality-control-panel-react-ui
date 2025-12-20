import { useState, useEffect } from "react";
import Select from "react-select";
import { formatDate } from "../../utils/Utils";
import { getCharacteristicsAPI } from "../../services/DataService";
import { generateReportAPI } from "../../services/ReportService";

export default function ReportsFilter({ filters, setFilters, generateReport }) {
  const [characteristics, setCharacteristics] = useState([]);

  const operations = [
    { value: "OPN-40", label: "OPN-40" },
    { value: "OPN-50", label: "OPN-50" },
    { value: "OPN-60", label: "OPN-60" },
    { value: "OPN-80", label: "OPN-80" },
    { value: "OPN-120", label: "OPN-120" },
    { value: "OPN-130", label: "OPN-130" },
    { value: "OPN-170", label: "OPN-170" },
    { value: "OPN-190", label: "OPN-190" },
    { value: "OPN-200", label: "OPN-200" },
    { value: "OPN-205", label: "OPN-205" },
    { value: "OPN-210", label: "OPN-210" },
  ];

  const reportTypes = [{ value: "part-history", label: "Part History" }];

  useEffect(() => {
    if (filters.operation && filters.operation.length > 0) {
      getCharacteristics();
    } else if (filters.operation.length == 0) {
      setCharacteristics([]);
    }
  }, [filters.operation]);

  const getCharacteristics = async () => {
    const res = await getCharacteristicsAPI(filters.operation);
    if (res.success && res.data?.length) {
      setCharacteristics(res.data);
    } else {
      alert("No Characteristics found for selected Operation.");
      setCharacteristics([]);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="mb-2">
        &nbsp;
        <strong>Filters</strong>
      </div>
      <div
        className="mt-1 p-3 border-bottom"
      >
        <div className="mb-3">
          <label className="form-label fw-bold">Operation Name</label>
          <Select
            isMulti
            options={operations}
            value={operations.filter((op) =>
              filters.operation.includes(op.value)
            )}
            onChange={(selected) =>
              setFilters((prev) => ({
                ...prev,
                operation: selected ? selected.map((s) => s.value) : [],
              }))
            }
          />
        </div>

        {/* Characteristics - Multi Select */}
        <div className="mb-3">
          <label className="form-label fw-bold">Characteristics</label>
          <Select
            isMulti
            options={characteristics}
            value={characteristics.filter((c) =>
              filters.characteristics.includes(c.value)
            )}
            onChange={(selected) =>
              setFilters((prev) => ({
                ...prev,
                characteristics: selected ? selected.map((s) => s.value) : [],
              }))
            }
          />
        </div>

        {/* Report Type */}
        <div className="mb-3">
          <label className="form-label fw-bold">Type of Report</label>
          <Select
            options={reportTypes}
            value={
              reportTypes.find((t) => t.value === filters.reportType) || null
            }
            onChange={(selected) =>
              setFilters((prev) => ({
                ...prev,
                reportType: selected ? selected.value : "",
              }))
            }
          />
        </div>

        {/* Date Pickers */}
        <div className="mb-3">
          <label className="form-label fw-bold">From</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                fromDate: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">To</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                toDate: e.target.value,
              }))
            }
          />
        </div>

        <div className="d-flex justify-content-end">
          <button
            onClick={() => generateReport(filters)}
            className="btn btn-primary btn-sm mx-2"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}