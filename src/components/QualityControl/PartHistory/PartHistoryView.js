import React from "react";
import "./PartHistoryView.css";
import partHistoryData from "./../../../Data/partHistory.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const PartHistoryView = () => {
  // Extract unique operation names from JSON
  const operationNames = [
    ...new Set(
      partHistoryData.flatMap((part) =>
        part.operations.map((op) => op.operation)
      )
    ),
  ];

  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>PART NAME</th>
            {operationNames.map((opName, index) => (
              <th key={index}>{opName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {partHistoryData.map((part, pIndex) => (
            <tr key={pIndex}>
              <td className="fw-bold">{part.partName}</td>
              {operationNames.map((opName, oIndex) => {
                const operation = part.operations.find(
                  (op) => op.operation === opName
                );

                return (
                  <td key={oIndex} className="text-white fw-bold">
                    <FontAwesomeIcon
                      style={
                        operation?.status === "pass"
                          ? { color: "green", height: 18, width: 18 }
                          : { color: "red", height: 18, width: 18 }
                      }
                      icon={
                        operation?.status === "pass"
                          ? faCircleCheck
                          : faCircleXmark
                      }
                    />
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

export default PartHistoryView;
