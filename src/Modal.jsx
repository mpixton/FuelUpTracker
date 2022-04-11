import React from "react";

import styles from "../styles/Modal.module.css";

const Modal = ({ show, children }) => {
  return (
    <>
      {show ? (
        <div className={styles.modal}>
          <div className={styles.modalChildren}>{children}</div>
        </div>
      ) : (
        <div className={styles.hide}>
          <div className={styles.modalChildren}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
