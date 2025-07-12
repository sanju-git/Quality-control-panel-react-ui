import React from "react";
import "./PartHistoryView.css";

const PartHistoryView = () => {
  return (
    <div className="part-history-view">
      <table>
        <thead>
          <tr>
            <th>PART NAME</th>
            <th>OP 40</th>
            <th>OP 50</th>
            <th>OP 60</th>
            <th>OP 70</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CH56741</td>
            <td className="green"></td>
            <td className="green"></td>
            <td className="green"></td>
            <td className="green"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {[...Array(5)].map((_, i) => (
            <tr key={i + 1}>
              <td></td>
              <td className="green"></td>
              <td className="green"></td>
              <td className="red"></td>
              <td className="green"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartHistoryView;
