import { useState } from "react";
import Input from "../Widgets/Input";
import PDFUploader from "./PDFUploader";
import Select from "react-select";
import { uploadLabResults } from "../../services/DataService";

const LabResultsContainer = () => {
  const [partNumber, setPartNumber] = useState(null);
  const setPartNumberFunc = (e) => {
    setPartNumber(e.target.value);
  };
  const placeholders = [
    { value: "Placeholder 1", label: "Placeholder 1" },
    { value: "Placeholder 2", label: "Placeholder 2" },
  ];

  const uploadFile = async (file) => {
    if (!file) {
      alert("Please select a PDF file first");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);
    await uploadLabResults(formData).then((response) => {
      if (response.success) {
        alert("File uploaded successfully!");
      } else {
        alert("Sorry! Could not upload file. Please try later.");
      }
    });
  };

  return (
    <div>
      <div className="upload-details">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-3">
            <label className="form-label fw-bold">Part Number</label>
            <Input
              placeholder={"Enter part number"}
              setPartNumberFunc={setPartNumberFunc}
              icon={false}
            />
          </div>
          <div className="ml-1 col-md-3">
            <label className="form-label fw-bold">Placeholder</label>
            <Select
              options={placeholders}
              // value={
              //   placeholders.find((p) => p.value === filters.placeholder) ||
              //   null
              // }
              // onChange={(selected) =>
              //   setFilters((prev) => ({
              //     ...prev,
              //     placeholder: selected ? selected.value : "",
              //   }))
              // }
            />
          </div>
        </div>
        <div>
          <PDFUploader uploadFile={uploadFile} />
        </div>
      </div>
    </div>
  );
};

export default LabResultsContainer;
