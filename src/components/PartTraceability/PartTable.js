import React from "react";
import "./PartTable.css"; // Optional styling

const PartTable = ({ showOPModalFunc,data }) => {
  // Extract all unique labels (row headers) from the first column
  const rowLabels = Object.keys(data.columns[0].values);

  return (
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>OP Name</th>
          {data.columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowLabels.map((label, rowIndex) => (
          <tr key={rowIndex}>
            <td>{label}</td>
            {data.columns.map((col, colIndex) => (
              <td
                className="cursor-pointer"
                onClick={() => showOPModalFunc(colIndex)}
                key={colIndex}
              >
                {label === "Time" ? (
                  <input type="date" className="form-control" />
                ) : (
                  col.values[label]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PartTable;
