import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReportsView({ reportURL }) {
  let showReport = false;
  if (reportURL != null && reportURL.length >= 1) showReport = true;
  if (showReport) {
    return (
      <>
        <div style={{ height: "100%" }} className="p-3 border rounded w-100">
          <div style={{ height: "100%" }}>
            <embed
              src={`${reportURL}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="mt-2 d-flex justify-content-end">
          <a href={reportURL} download="PartHistoryReport.pdf">
            <button className="btn btn-dark btn-sm mx-2"><FontAwesomeIcon
              style={{ color: "#fff", height: 18, width: 18 }}
              icon={faDownload}
            />
              &nbsp;&nbsp;Download</button>
          </a>
        </div>
      </>
    );
  } else {
    return (
      <div
        style={{ height: "85vh", border: "2px dashed #898989" }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="text-center block-select-text mb-3">
          <h5>Please apply filters to generate the report</h5>
        </div>
      </div>
    );
  }
}
