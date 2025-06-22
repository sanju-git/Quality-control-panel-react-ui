import React from "react";
import { ReactComponent as DownloadIcon } from "./../../assets/icons/download-icon.svg";

const IndividualPartindividualPartData = ({ individualPartData }) => {
  // Convert the table individualPartData to CSV format
  const downloadCSV = () => {
    const rows = [
      ["OP Name", individualPartData.header],
      ...Object.entries(individualPartData.values).map(([label, value]) => [
        label,
        value,
      ]),
    ];

    const csvContent = rows.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `${individualPartData.header.replace(" ", "_")}_individualPartData.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Cleanup
  };

  return (
    <div>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>OP Name</th>
            <th>{individualPartData.header}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(individualPartData.values).map(
            ([label, value], index) => (
              <tr key={index}>
                <td>{label}</td>
                <td>
                  {label === "Time" ? (
                    <input
                      type="date"
                      className="form-control"
                      defaultValue={value}
                    />
                  ) : (
                    value
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <i className="d-flex justify-content-end cursor-pointer mt-1" onClick={downloadCSV}>
        <DownloadIcon width="32" height="32" />
      </i>
    </div>
  );
};

export default IndividualPartindividualPartData;
