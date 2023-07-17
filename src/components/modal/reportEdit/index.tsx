import Image from "next/image";
import svg from "../../../../public/icons/note.svg";
import React from "react";
import styles from "./modal.module.css";
import CloseIcon from "../../../../public/icons/close.svg";

interface ReportEditModalProps {
  title: string
  onClose?: any
  listItems?: any
  subtitle: string
  otherLists?: any
  label: string
  value?: any
  buttonText: string
}

const listItemsMock = [
  {
    name: "Anderson Junior",
    subtitle: "Relatório Semanal Prefeitura",
  }
];

const otherListsMock = [
  {
    title: "Validação de Motor Ocioso",
    subtitle: "Tensão da Bateria",
  },
  {
    title: "Tensão da Bateria",
    subtitle: "13.4 V",
  },
];

const ReportEditModal = (props: ReportEditModalProps) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{props.title}</h2>
          <div
            className={styles.closeButton}
            // onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
        </div>
        <div className={styles.lists}>
          <div className={styles.listItem}>
            {listItemsMock.map((item, index) => (
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
          <div className={styles.subtitle}>{props.subtitle}</div>
          {otherListsMock.map((list, index) => (
            <div key={index} className={styles.otherList}>
              <h3 className={styles.otherListTitle}>{list.title}</h3>
              <p className={styles.otherListSubtitle}>{list.subtitle}</p>
            </div>
          ))}
        </div>
        <label className={styles.label}>{props.label}</label>
        <input className={styles.input} value={props.value} />
        <button className={styles.button}>{props.buttonText}</button>
      </div>
    </div>
  );
};

export default ReportEditModal;
