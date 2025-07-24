import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, onConfirm, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <div className={styles.actions}>
          <button className={styles.btnConfirm} onClick={onConfirm}>Sim</button>
          <button className={styles.btnCancel} onClick={onClose}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;