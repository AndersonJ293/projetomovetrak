import styles from "./ownerRoutes.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface OwnerRoutesView {
  ownerName: string;
  aberto: boolean;
  fechar: (value: any) => void;
}

export default function OwnerRoutesView(props: OwnerRoutesView) {
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
          <span className={styles.title}>Rotas {props.ownerName}</span>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.driverHeader}>
            <div className={styles.cellDiv}>
              <span>Rota</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Percurso</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Veículo</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Turno</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Ações</span>
            </div>
          </div>

          <div className={styles.driverDiv}>
            <div className={styles.cellDiv}>
              <span>Rota</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Percurso</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Veículo</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Turno</span>
            </div>
            <div className={styles.cellDiv}>
              <div className={styles.editButton}>Editar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
