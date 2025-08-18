import Select from "react-select";

export default function ReportsFilter({ filters, setFilters }) {
  const operations = [
    { value: "OPN_40", label: "OPN_40" },
    { value: "OPN_50", label: "OPN_50" },
    { value: "OPN_60", label: "OPN_60" },
    { value: "OPN_80", label: "OPN_80" },
    { value: "OPN-120", label: "OPN-120" },
    { value: "OPN_130", label: "OPN_130" },
    { value: "OPN_170", label: "OPN_170" },
    { value: "OPN-190", label: "OPN-190" },
    { value: "OPN-200", label: "OPN-200" },
    { value: "OPN-205", label: "OPN-205" },
    { value: "OPN-210", label: "OPN-210" },
  ];
  const characteristics = [
    { value: "Weight", label: "Weight" },
    { value: "Size", label: "Size" },
    { value: "Color", label: "Color" },
  ];
  const reportTypes = [
    { value: "Summary", label: "Summary" },
    { value: "Detailed", label: "Detailed" },
  ];
  const placeholders = [
    { value: "Placeholder 1", label: "Placeholder 1" },
    { value: "Placeholder 2", label: "Placeholder 2" },
  ];

  return (
    <div style={{ width: "100%" }}>
      <div className="mb-2">
        &nbsp;
        <strong>Filters</strong>
      </div>
      <div className="mt-1 p-3 border rounded">
        {/* Operation Name - Multi Select */}
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

        {/* Type of Report - Single */}
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

        <div className="mb-3">
          <label className="form-label fw-bold">Placeholder</label>
          <Select
            options={placeholders}
            value={
              placeholders.find((p) => p.value === filters.placeholder) || null
            }
            onChange={(selected) =>
              setFilters((prev) => ({
                ...prev,
                placeholder: selected ? selected.value : "",
              }))
            }
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-dark btn-sm mx-2">Generate Report</button>
        </div>
      </div>
    </div>
  );
}
