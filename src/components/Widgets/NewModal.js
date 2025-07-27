import React from "react";
import "./NewModal.css";

const NewModal = ({ children, closePopup }) => {
  return (
    <div className="new-modal-backdrop">
      <div className="new-modal-content">
        <button className="new-modal-close" onClick={closePopup}>
          ×
        </button>
        <div className="new-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default NewModal;