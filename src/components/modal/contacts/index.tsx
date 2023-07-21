import Image from "next/image";
import svg from "../../../../public/icons/phone.svg";
import React from "react";
import styles from "./modal.module.css";
import CloseIcon from "../../../../public/icons/close.svg";

interface ModalContactsProps {
  title: string;
  listItems?: any;
  aberto: boolean;
  fechar: (value: any) => void;
}

const listItemsMock = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    phone: "555-555-5555",
  },
];

const ModalContacts = (props: ModalContactsProps) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{props.title}</h2>
          <div
            className={styles.closeButton}
            onClick={() => props.fechar(false)}
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
                  <p className={styles.itemSubtitle}>{item.email}</p>
                  <p className={styles.itemSubtitle}>{item.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContacts;
