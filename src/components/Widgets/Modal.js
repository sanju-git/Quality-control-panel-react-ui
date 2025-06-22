import React from "react";
import "./Modal.css";

const Modal = ({ closePopup, showHeader = true, children }) => {
  //   const handleChange = (option) => {
  //     closePopup(option);
  //   };

  return (
    <>
      <div className="darkBG" />
      <div className="centered">
        <div className="modal">
          {showHeader && (
            <div className="modalHeader">
              <h6 onClick={() => closePopup()} className="close-icon">
                X
              </h6>
            </div>
          )}
          <div className="modalContent">
            {children}
            {/* Hello!! */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
