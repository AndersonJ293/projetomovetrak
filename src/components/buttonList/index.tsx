import React from "react";
import Image from "next/image";
import styles from "./buttonList.module.css";

interface ButtonListProps {
  titleButton?: any;
  iconButton?: any;
  actionButton?: any;
  secondaryButtons?: any;
}

const ButtonList = (props: ButtonListProps) => {
  return (
    <div className={styles.buttonList}>
      {props.secondaryButtons.map((button: any, index: any) => (
        <button
          key={index}
          className={styles.secondaryButton}
          onClick={button.action}
        >
          <Image src={button.icon} alt={"Butão"} width={18} height={18} />
        </button>
      ))}
      <button className={styles.primaryButton} onClick={props.actionButton}>
        <Image
          src={props.iconButton}
          alt={"Butão"}
          width={15}
          height={15}
          style={{ marginRight: "5px" }}
        />
        <span>{props.titleButton}</span>
      </button>
    </div>
  );
};

export default ButtonList;
