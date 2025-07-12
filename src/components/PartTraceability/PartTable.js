import React from "react";
import "./PartTable.css";

const REQUIRED_OPNS = [
  "OPN_40",
  "OPN_50",
  "OPN_60",
  "OPN_80",
  "OP-120",
  "OPN_130",
  "OPN_170",
  "OPN-190",
  "OPN-200",
  "OPN-205",
  "OPN-210",
];

const HEADERS = [
  "Operator Name",
  "Date",
  "Time",
  "Machine Name",
  "Overall Status",
];

const PartTable = ({ data, showParameters }) => {
  const getValue = (opn, key) => {
    const entry = data[opn];
    return entry ? entry[key] || "NULL" : "NULL";
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Operator Name</th>
            {REQUIRED_OPNS.map((opn) => (
              <th key={opn}>{opn}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HEADERS.map((field, rowIndex) => (
            <tr key={rowIndex}>
              <td>{field}</td>
              {REQUIRED_OPNS.map((opn, colIndex) => {
                let displayKey = "";
                switch (field) {
                  case "Operator Name":
                    displayKey = "operatorName";
                    break;
                  case "Date":
                    displayKey = "date";
                    break;
                  case "Time":
                    displayKey = "time";
                    break;
                  case "Machine Name":
                    displayKey = "machineName";
                    break;
                  case "Overall Status":
                    displayKey = "overallStatus";
                    break;
                  default:
                    break;
                }

                const cellValue = getValue(opn, displayKey);

                // Apply background color for 'Overall Status' row
                let style = {};
                if (displayKey === "overallStatus") {
                  if (cellValue.toLowerCase() === "ok") {
                    style.backgroundColor = "#AFE1AF";
                  } else if (cellValue.toLowerCase() === "nok") {
                    style.backgroundColor = "#EE4B2B";
                  }
                }

                return (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={cellValue !== "NULL" ? "cursor-pointer" : ""}
                    onClick={cellValue !== "NULL" ? () => showParameters(opn) : undefined}
                    style={style}
                  >
                    {cellValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartTable;
