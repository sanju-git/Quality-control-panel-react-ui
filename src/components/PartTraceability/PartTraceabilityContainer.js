import { useParams } from "react-router-dom";
import PartTable from "./PartTable";
import "./PartTraceAbilityContainer.css";
import Input from "../Widgets/Input";
import { useState } from "react";
import Modal from "../Widgets/Modal";
// import data from "./../../Data/partsData.json"; // Adjust path if needed
import IndividualPartindividualPartData from "./IndividualPartData";
import { getPartsData } from "../../services/DataService";
import Spinner from "../Widgets/Spinner";

const PartTraceabilityContainer = () => {
  const { id } = useParams();
  const [showOPModal, setShowOPModal] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(null);
  const [partsData, setPartsData] = useState({});
  const [partNumber, setPartNumber] = useState(null);
  const [parameters, setParameters] = useState([]);
  const [loading, setLoading] = useState(false);

  const closeOPModalFunc = () => {
    setShowOPModal(false);
  };
  const setPartNumberFunc = (e) => {
    setPartNumber(e.target.value);
  };

  const searchPartNumber = async () => {
    if (partNumber && partNumber.length >= 1) {
      setLoading(true);
      if (partNumber && partNumber != null) {
        await getPartsData(partNumber).then((response) => {
          if (response.success) {
            console.log(response.data);
            setPartsData(response.data);

            setTimeout(
              function () {
                setLoading(false);
              }.bind(this),
              1000
            );
          } else {
            setPartsData([]);
            setLoading(false);
          }
        });
      }
    }
  };

  const showParameters = (opn) => {
    console.log(partsData[opn]["parameters"]);
    setShowOPModal(true);
    setParameters(partsData[opn]["parameters"]);
  };

  if (!loading) {
    return (
      <div>
        <div className="filter d-flex align-items-center justify-content-center">
          <Input
            placeholder={"Enter part number"}
            setPartNumberFunc={setPartNumberFunc}
          />
          <button onClick={() => searchPartNumber()} className="ml-1">
            Search
          </button>
        </div>
        {partsData && Object.entries(partsData).length >= 1 ? (
          <div className="part-table">
            <PartTable data={partsData} showParameters={showParameters} />
          </div>
        ) : (
          <div
            style={{ height: "70vh" }}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <h5>No Data</h5>
            <h6>Enter a valid part number to get its operations details</h6>
          </div>
        )}
        {showOPModal && parameters && parameters.length >= 1 && (
          <Modal closePopup={closeOPModalFunc} showHeader={true}>
            <IndividualPartindividualPartData individualPartData={parameters} />
          </Modal>
        )}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default PartTraceabilityContainer;
