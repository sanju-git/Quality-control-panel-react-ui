import React from "react";
import { ReactComponent as DownloadIcon } from "./../../assets/icons/download-icon.svg";
import "./IndividualPartData.css";

const IndividualPartData = ({
  individualPartData = [],
  header = "OPN",
}) => {
  const downloadCSV = () => {
    // ... (downloadCSV function remains the same)
    const rows = [
      ["Character Name", "Value", "Lower Limit", "Upper Limit", "Status"],
      ...individualPartData.map((param) => [
        param.characterName,
        param.value,
        param.lowerLimitValue,
        param.upperLimitValue,
        param.status,
      ]),
    ];
    const csvContent = rows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `${header.replace(/\s+/g, "_")}_Parameters.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    // No more wrappers needed, the parent modal will handle the layout
    <>
      <table className="table table-bordered text-center sticky-header-table">
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Value</th>
            <th>Lower Limit</th>
            <th>Upper Limit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {individualPartData.length > 0 ? (
            individualPartData.map((param, index) => (
              <tr key={index}>
                <td>{param.characterName}</td>
                <td>{param.value}</td>
                <td>{param.lowerLimitValue}</td>
                <td>{param.upperLimitValue}</td>
                <td style={{background:param.status=="OK"?"#AFE1AF":"#EE4B2B"}}>{param.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* The footer is now styled to be sticky within the scrolling parent */}
      <div className="part-data-footer cursor-pointer" onClick={downloadCSV}>
        <DownloadIcon width="32" height="32" />
      </div>
    </>
  );
};

export default IndividualPartData;