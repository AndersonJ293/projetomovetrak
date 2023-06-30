import styles from "./cardsRotas.module.css";
import Image from "next/image";

import truckIcon from "../../../../../public/icons/car.svg";

export default function CardsRotas() {
  return (
    <div className={styles.container}>
      <Image src={truckIcon} width={25} height={25} alt="" />
      <div className={styles.columnText}>
        <p className={styles.carPlate}>PKY-5982</p>
        <div className={styles.rowText}>
          <p className={styles.routeText}>Concluida 11:32</p>
        </div>
      </div>
      <div className={styles.statusIndicator}></div>
    </div>
  );
}
