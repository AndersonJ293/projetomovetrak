import styles from "./dados.module.css";
import Image from "next/image";

import truckIcon from "@/assets/icons/truck.png";
import userIcon from "@/assets/icons/addUser.png";

export default function DadosProprietarios() {
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
        <div className={styles.textContainer}>
          <span className={styles.name}>Mário Murilo Drumond</span>
          <span className={styles.cpf}>364.611.242-50</span>
          <span className={styles.school}>Escola 1</span>
          <div className={styles.situation}></div>
        </div>

        <div className={styles.buttonsContainer}>
          <div className={styles.smallButton}>
            <Image src={truckIcon} width={15} height={15} alt="" />
          </div>
          <div className={styles.smallButton}>
            <Image src={userIcon} width={15} height={15} alt="" />
          </div>
          <div className={styles.smallButton}></div>
          <div className={styles.smallButton}></div>
          <div className={styles.editButton}></div>
        </div>
      </div>
    </div>
  );
}
