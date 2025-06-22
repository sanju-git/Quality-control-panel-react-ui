import "./QualityDashboardFilters.css";

const QualityDashboardFilters = () => {
  return (
    <div className="filter-container">
      <div>
        <h3 className="text-center">Slicers</h3>
      </div>
      <div className="d-flex justify-space-evenly mt-1">
        <div>
          <input type="date" className="form-control" />
        </div>
        <div>
          <input type="date" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default QualityDashboardFilters;
