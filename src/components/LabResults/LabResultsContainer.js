import { useState } from "react";
import Input from "../Widgets/Input";
import PDFUploader from "./PDFUploader";

const LabResultsContainer = () => {
  const [partNumber, setPartNumber] = useState(null);
  const setPartNumberFunc = (e) => {
    setPartNumber(e.target.value);
  };
  return (
    <div>
      <div className="upload-details">
        <div className="d-flex justify-content-center">
          <Input
            placeholder={"Enter part number"}
            setPartNumberFunc={setPartNumberFunc}
            icon={false}
          />
        </div>
        <div>
          <PDFUploader />
        </div>
      </div>
    </div>
  );
};

export default LabResultsContainer;
