import Image from "next/image";
import svg from "../../../../public/icons/phone.svg";
import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";

const ModalContacts = ({ title, listItems }) => {
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
                <p className={styles.itemSubtitle}>{item.email}</p>
                <p className={styles.itemSubtitle}>{item.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ModalContacts.propTypes = {
  title: PropTypes.string.isRequired,
  // onClose: PropTypes.func.isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ModalContacts;
