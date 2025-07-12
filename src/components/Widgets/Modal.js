import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ closePopup, showHeader, header, children }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 10); // short delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="darkBG" />
      <div className={`centered ${animate ? "modal-enter" : ""}`}>
        <div className="custom-modal">
          {showHeader && (
            <div className="modalHeader">
              {header && <h5 className="modalTitle">{header}</h5>}
              <span onClick={() => closePopup()} className="close-btn">
                &times;
              </span>
            </div>
          )}
          <div className="modalContent">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
