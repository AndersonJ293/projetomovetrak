import React from "react";
import Image from "next/image";
import styles from "./buttonList.module.css";

const ButtonList = ({
  titleButton,
  iconButton,
  actionButton,
  secondaryButtons,
}) => {
  return (
    <div className={styles.buttonList}>
      {secondaryButtons.map((button, index) => (
        <button
          key={index}
          className={styles.secondaryButton}
          onClick={undefined}
        >
          <Image src={button.icon} alt={"Butão"} width={18} height={18} />
        </button>
      ))}
      <button className={styles.primaryButton} onClick={undefined}>
        <Image
          src={iconButton}
          alt={"Butão"}
          width={18}
          height={18}
          style={{ marginRight: "8px" }}
        />
        <span>{titleButton}</span>
      </button>
    </div>
  );
};

export default ButtonList;
