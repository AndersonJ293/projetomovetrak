import styles from "./rotas.module.css";
import Image from "next/image";

import reloadIcon from "@/assets/icons/reload.png";
import CardsRotas from "./cardsRotas";

export default function RotasDashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titleText}>Situação de Rota</h1>
        <Image
          className={styles.reloadIcon}
          src={reloadIcon}
          width={20}
          height={20}
          alt=""
        />
      </div>
      <div className={styles.tableContainer}>
        <CardsRotas></CardsRotas>
      </div>
    </div>
  );
}
