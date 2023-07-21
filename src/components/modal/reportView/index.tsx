import styles from "./reportView.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface ReportView {
  reportName: string;
  aberto: boolean;
  fechar: (value: any) => void;
}

export default function ReportView(props: ReportView) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <div
            className={styles.closeButton}
            onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
          <span className={styles.title}>
            Visualizar Relatório {props.reportName}
          </span>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.reportHeader}>
            <span>Tipo: Motor Ocioso</span>
            <span>Veículo: PKY-2832</span>
            <span>Intervalo: 22/06/2023 00:00 à 23/06/2023 23:59</span>
          </div>

          <div className={styles.divider} />

          <table className={styles.reportTable}>
            <thead className={styles.tableHeader}>
              <tr>
                <td>Data</td>
                <td>Início</td>
                <td>Fim</td>
                <td>Duração</td>
                <td>Localização</td>
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              <tr>
                <td>22/06/2023</td>
                <td>10:32:40</td>
                <td>10:37:51</td>
                <td>00:05:11</td>
                <td>-12.142593, -44.990044</td>
              </tr>
            </tbody>

            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
