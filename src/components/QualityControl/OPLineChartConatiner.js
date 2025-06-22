import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const chartDataArray = [
  {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        label: "Series 1",
        data: [10, 5, 20, 30, 35],
        borderColor: "#00CFFF",
        backgroundColor: "#00CFFF",
        tension: 0.4,
      },
      {
        label: "Series 2",
        data: [20, 30, 25, 20, 40],
        borderColor: "#00A3FF",
        backgroundColor: "#00A3FF",
        tension: 0.4,
      },
      {
        label: "Series 3",
        data: [15, 25, 35, 45, 50],
        borderColor: "#0066CC",
        backgroundColor: "#0066CC",
        tension: 0.4,
      },
    ],
  },
];

const OPLineChartConatiner = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {chartDataArray.map((data, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <Line data={data} options={chartOptions} />
        </div>
      ))}
    </div>
  );
};

export default OPLineChartConatiner;
