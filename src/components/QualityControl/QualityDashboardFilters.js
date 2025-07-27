import { useState, useRef, useEffect } from "react";
import "./QualityDashboardFilters.css";
import { formatDate } from "../../utils/Utils";
import { ReactComponent as SettingsIcon } from "./../../assets/icons/settings-icon.svg";

// Helper: Get N previous valid days (excluding Sundays)
const getDateNDaysBeforeExcludingSundays = (endDate, validDayCount) => {
  let currentDate = new Date(endDate);
  let count = 0;

  while (count < validDayCount) {
    currentDate.setDate(currentDate.getDate() - 1);
    if (currentDate.getDay() !== 0) {
      count++;
    }
  }

  return currentDate;
};

const QualityDashboardFilters = ({ applyFilters, showPartHistory }) => {
  const [selectedOption, setSelectedOption] = useState("Current Date");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [prevRange, setPrevRange] = useState({ from: null, to: null });
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    handleSelect("Current Date");
  }, []);

  useEffect(() => {
    const today = new Date();
    const to =
      today.getDay() === 0
        ? new Date(today.setDate(today.getDate() - 1))
        : today;
    const from = getDateNDaysBeforeExcludingSundays(to, 1);

    setSelectedOption("Current Date");
    setFromDate(from);
    setToDate(to);
    setPrevRange({ from, to });
    applyFilters(formatDate(from), formatDate(to));
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);

    if (option === "Custom Range") {
      setFromDate(null);
      setToDate(null);
      return;
    }

    let today = new Date();
    let newToDate = new Date(today);
    if (newToDate.getDay() === 0) {
      newToDate.setDate(newToDate.getDate() - 1);
    }

    const daysBack =
      option === "Last 30 Days" ? 30 : option === "Last 7 Days" ? 7 : 1;
    const newFromDate = getDateNDaysBeforeExcludingSundays(newToDate, daysBack);

    setFromDate(newFromDate);
    setToDate(newToDate);
  };

  const handleApply = () => {
    const isChanged =
      !prevRange.from ||
      !prevRange.to ||
      prevRange.from.getTime() !== fromDate.getTime() ||
      prevRange.to.getTime() !== toDate.getTime();

    if (isChanged && fromDate && toDate && fromDate < toDate) {
      applyFilters(formatDate(fromDate), formatDate(toDate));
      setPrevRange({ from: fromDate, to: toDate });
    }
  };

  const handleFromDateChange = (e) => {
    setFromDate(new Date(e.target.value));
  };

  const handleToDateChange = (e) => {
    setToDate(new Date(e.target.value));
  };

  const isCustomValid =
    selectedOption === "Custom Range" &&
    fromDate &&
    toDate &&
    fromDate < toDate;

  const isApplyEnabled =
    selectedOption === "Custom Range" ? isCustomValid : true;

  return (
    <div className="filter-container d-flex justify-content-evenly">
      <div className="align-items-center text-center d-flex">
        <strong>Filter by Date Range :</strong>

        <div className="d-flex dropdown my-2 mx-2" ref={dropdownRef}>
          <button
            className="btn btn-outline-dark dropdown-toggle"
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {selectedOption}
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu show w-100">
              {[
                "Current Date",
                "Last 7 Days",
                "Last 30 Days",
                "Custom Range",
              ].map((option) => (
                <button
                  key={option}
                  className={`dropdown-item ${
                    selectedOption === option ? "active" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedOption === "Custom Range" ? (
          <div className="small d-flex align-items-center text-center justify-content-center">
            <span className="mx-2">
              <strong>From:</strong>
            </span>
            <input
              type="date"
              className="form-control form-control-sm"
              onChange={handleFromDateChange}
              value={fromDate ? formatDate(fromDate) : ""}
            />
            <span className="mx-2">
              <strong>To:</strong>
            </span>
            <input
              type="date"
              className="form-control form-control-sm"
              onChange={handleToDateChange}
              value={toDate ? formatDate(toDate) : ""}
              min={fromDate ? formatDate(fromDate) : ""}
            />
          </div>
        ) : (
          <div className="small d-flex align-items-center text-center justify-content-center">
            <span className="mx-2">
              <strong>From:</strong> {fromDate?.toDateString()}
            </span>
            <span className="mx-2">
              <strong>To:</strong> {toDate?.toDateString()}
            </span>
          </div>
        )}

        <button
          className="btn btn-dark btn-sm mx-2"
          onClick={handleApply}
          disabled={!isApplyEnabled}
        >
          Apply Filters
        </button>
      </div>
      <div
        onClick={() => showPartHistory()}
        className="d-flex align-items-center justify-content-center"
      >
        <button className="btn btn-md btn-outline-dark">
          <SettingsIcon width="20" height="20" />
          &nbsp;<strong>Part history</strong>
        </button>
      </div>
    </div>
  );
};

export default QualityDashboardFilters;
