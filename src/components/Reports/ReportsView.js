import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReportsView({ reportURL }) {
  let showReport = false;
  if (reportURL != null && reportURL.length >= 1) showReport = true;
  if (showReport) {
    return (
      <>
        <div className="d-flex flex-column h-100 gap-2">
          <div className="flex-grow-1 border rounded overflow-hidden shadow-sm" style={{ background: "#525659" }}>
            <embed
              src={`${reportURL}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
          <div className="d-flex justify-content-end">
            <a href={reportURL} download="PartHistoryReport.pdf">
              <button className="btn btn-primary btn-sm mx-2">
                <FontAwesomeIcon
                  style={{ color: "#fff", height: 16, width: 16 }}
                  icon={faDownload}
                />
                &nbsp;&nbsp;Download
              </button>
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div
        className="h-100 d-flex align-items-center justify-content-center border rounded bg-light"
        style={{ borderStyle: "dashed !important", borderColor: "#ccc" }}
      >
        <div className="text-center text-muted">
          <h5>Please apply filters to generate the report</h5>
        </div>
      </div>
    );
  }
}
