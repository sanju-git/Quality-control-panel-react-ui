import { useState } from "react";
import { Line } from "react-chartjs-2";
// ChartSetup.js or wherever you use Chart.js
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const OPLineChartContainer = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "top" } },
  };

  const chartDataArray = Array(6).fill({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Performance",
        data: [10, 20, 15, 30, 35],
        borderColor: "#00CFFF",
        backgroundColor: "rgba(0, 207, 255, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Target",
        data: [15, 18, 22, 28, 32],
        borderColor: "#0066CC",
        backgroundColor: "rgba(0, 102, 204, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  });

  const dummyChartOptions = {
    Option1: [5, 10, 15, 20, 25],
    Option2: [8, 12, 18, 22, 28],
    Option3: [2, 6, 9, 14, 18],
    Option4: [30, 25, 20, 15, 10],
  };

  const [activeTab, setActiveTab] = useState("Default");
  const [selectedOption, setSelectedOption] = useState("");
  const [customChartData, setCustomChartData] = useState(null);

  const handleGenerate = () => {
    if (selectedOption) {
      const data = {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [
          {
            label: selectedOption,
            data: dummyChartOptions[selectedOption],
            borderColor: "#FF5733",
            backgroundColor: "rgba(255, 87, 51, 0.2)",
            tension: 0.4,
            fill: true,
          },
        ],
      };
      setCustomChartData(data);
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick={() => setActiveTab("Default")}>
          <a
            className={`btn ${
              activeTab === "Default" ? "nav-link active" : "nav-link"
            }`}
            aria-current="page"
          >
            Default
          </a>
        </li>
        <li className="nav-item" onClick={() => setActiveTab("Custom")}>
          <span
            className={`btn ${
              activeTab === "Custom" ? "nav-link active" : "nav-link"
            }`}
          >
            Custom
          </span>
        </li>
      </ul>

      {activeTab === "Default" ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {chartDataArray.map((data, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                height: "350px",
              }}
            >
              <Line data={data} options={chartOptions} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="d-flex align-items-center gap-3 mb-3">
            <select
              className="form-select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              style={{ width: "200px" }}
            >
              <option value="">Select Option</option>
              {Object.keys(dummyChartOptions).map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <button
              className="btn btn-primary"
              onClick={handleGenerate}
              disabled={!selectedOption}
            >
              Generate Chart
            </button>
          </div>
          {customChartData && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                height: "400px",
              }}
            >
              <Line data={customChartData} options={chartOptions} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OPLineChartContainer;
