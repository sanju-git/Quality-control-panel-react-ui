import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PDFUploader.css";

const PDFUploader = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">Upload PDF</h3>
      <div
        className={`upload-area p-4 text-center border rounded ${
          dragActive ? "drag-active" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <i className="bi bi-file-earmark-arrow-up fs-1 text-primary"></i>
        <p className="mt-2">Drag & Drop your PDF here</p>
        <p className="text-muted">or</p>
        <button
          className="btn btn-primary"
          onClick={() => fileInputRef.current.click()}
        >
          Select PDF
        </button>
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="d-none"
        />
      </div>

      {file && (
        <div className="mt-4 p-3 border rounded d-flex align-items-center">
          <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
          <div>
            <strong>{file.name}</strong>
            <div className="text-muted small">
              {(file.size / 1024).toFixed(2)} KB
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
