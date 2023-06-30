// Modal.js

import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({
  title,
  onClose,
  listItems,
  subtitle,
  otherLists,
  inputPlaceholder,
  buttonText,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <h2>{title}</h2>
        <button className={styles.closeButton} onClick={undefined}>
          Fechar
        </button>
      </div>
      <div className={styles.listItem}>
        {listItems.map((item, index) => (
          <div key={index} className={styles.listItemContent}>
            <div className={styles.icon}>{item.icon}</div>
            <div>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemSubtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
        <div className={styles.time}>Hora</div>
      </div>
      <div className={styles.subtitle}>{subtitle}</div>
      {otherLists.map((list, index) => (
        <div key={index} className={styles.otherList}>
          <h3 className={styles.otherListTitle}>{list.title}</h3>
          <p className={styles.otherListSubtitle}>{list.subtitle}</p>
        </div>
      ))}
      <input className={styles.input} placeholder={inputPlaceholder} />
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  subtitle: PropTypes.string.isRequired,
  otherLists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Modal;
