import reportPdf from "../../assets/OP40 SPC.pdf";

export default function ReportsView() {
  let showReport = false;
  if (showReport) {
    return (
      <div style={{ height: "44vw" }} className="p-3 border rounded w-100">
        <iframe
          src={reportPdf}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
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
