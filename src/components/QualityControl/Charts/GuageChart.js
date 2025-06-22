import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import "./GuageChart.css";

ChartJS.register(ArcElement, Tooltip);

const GaugeChart = ({ value, thresholds, colors }) => {
  const getGaugeColor = (value) => {
    for (let i = 0; i < thresholds.length; i++) {
      if (value <= thresholds[i]) return colors[i];
    }
    return colors[colors.length - 1];
  };

  const gaugeColor = getGaugeColor(value);

  const gaugeData = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [gaugeColor, "#e0e0e0"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const gaugeOptions = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="guage-card">
      <h3 className="text-center">Overall Quality</h3>
      <div
        style={{ height: "8em", width: "16em" }}
        className="d-flex justify-content-center"
      >
        <Doughnut data={gaugeData} options={gaugeOptions} />
      </div>
    </div>
  );
};

export default GaugeChart;
