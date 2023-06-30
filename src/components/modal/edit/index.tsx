import Image from "next/image";
import svg from "../../../assets/icons/note.svg";
import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";

const Modal = ({
  title,
  onClose,
  listItems,
  subtitle,
  otherLists,
  label,
  value,
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
      <div className={styles.lists}>
        <div className={styles.listItem}>
          {listItems.map((item, index) => (
            <div key={index} className={styles.listItemContent}>
              <div className={styles.iconTwo}>
                <Image
                  src={svg}
                  width={18}
                  height={18}
                  alt={"icone nota"}
                  className={styles.iconSvg}
                ></Image>
              </div>
              <div>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemSubtitle}>{item.subtitle}</p>
              </div>
            </div>
          ))}
          <div className={styles.time}>23/06/23 ás 16:15</div>
        </div>
        <div className={styles.subtitle}>{subtitle}</div>
        {otherLists.map((list, index) => (
          <div key={index} className={styles.otherList}>
            <h3 className={styles.otherListTitle}>{list.title}</h3>
            <p className={styles.otherListSubtitle}>{list.subtitle}</p>
          </div>
        ))}
      </div>
      <label>{label}</label>
      <input className={styles.input} value={value} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
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
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Modal;
