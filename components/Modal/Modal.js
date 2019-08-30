import React from "react";
import "./Modal.css";

const Modal = ({ children, showModal, handleClose }) => {
  const showHideClassname = showModal ? "modal active" : "modal inactive";
  return (
    <div className={showHideClassname}>
      <section className="modal-main">
        {children}
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
      </section>
    </div>
  );
};
export default Modal;
