import { useParams } from "react-router-dom";
import PartTable from "./PartTable";
import "./PartTraceAbilityContainer.css";
import Input from "../Widgets/Input";
import { useState } from "react";
import Modal from "../Widgets/Modal";
import data from "./../../Data/partsData.json"; // Adjust path if needed
import IndividualPartindividualPartData from "./IndividualPartData";

const PartTraceabilityContainer = () => {
  const { id } = useParams();
  const [showOPModal, setShowOPModal] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(null);
  const [partsData, setPartsData] = useState(data);

  const showOPModalFunc = (colIndex) => {
    setShowOPModal(true);
    setModalDataIndex(colIndex);
    // console.log(partsData.columns[colIndex]);
  };
  const closeOPModalFunc = () => {
    setShowOPModal(false);
  };
  return (
    <div>
      <div className="filter d-flex align-items-center justify-content-center">
        <Input />
      </div>
      <div className="part-table">
        <PartTable data={partsData} showOPModalFunc={showOPModalFunc} />
      </div>
      {showOPModal && (
        <Modal closePopup={closeOPModalFunc}>
          <IndividualPartindividualPartData
            individualPartData={partsData.columns[modalDataIndex]}
          />
        </Modal>
      )}
    </div>
  );
};

export default PartTraceabilityContainer;
