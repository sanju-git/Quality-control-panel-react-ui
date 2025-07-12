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
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="guage-card h-100 d-flex flex-column">
      <h5 className="text-center mb-3">Overall Quality</h5>
      <div className="chart-wrapper flex-grow-1">
        <Doughnut data={gaugeData} options={gaugeOptions} />
      </div>
    </div>
  );
};

export default GaugeChart;
