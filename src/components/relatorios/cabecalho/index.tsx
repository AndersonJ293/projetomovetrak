import styles from "./cabecalho.module.css";
import Image from "next/image";

import widgetIcon from "@/assets/icons/widget.png";

export default function CabecalhoRelatorios() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.static}>
          <p className={styles.reportText}>Relatório</p>
          <p className={styles.vehicleText}>Veículos</p>
          <p className={styles.periodText}>Período</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.reportData}>
          <p className={styles.reportText}>Rotas Grupo Mensal</p>
          <p className={styles.vehicleText}>CES5H07, PLL6H83, PKY-5982 </p>
          <p className={styles.periodText}>
            23/05/2023 00:00 à 23/05/2023 23:59
          </p>
        </div>
      </div>

      <div className={styles.selectColumnsButton}>
        <p className={styles.buttonText}>Selecionar Colunas</p>
        <Image
          className={styles.widgetIcon}
          src={widgetIcon}
          width={18}
          height={18}
          alt=""
        />
      </div>
    </div>
  );
}
