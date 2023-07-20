import styles from "./ownerDrivers.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface ownerDrivers {
  ownerName: string;
}

export default function OwnerDrivers(props: ownerDrivers) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <div
            className={styles.closeButton}
            // onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
          <span className={styles.title}>Motoristas {props.ownerName}</span>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.driverHeader}>
            <div className={styles.cellDiv}>
              <span>Nome</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Contato</span>
            </div>
            <div className={styles.cellDiv}>
              <span>CNH</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Vencimento CNH</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Ações</span>
            </div>
          </div>

          <div className={styles.driverDiv}>
            <div className={styles.cellDiv}>
              <span>Nome</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Contato</span>
            </div>
            <div className={styles.cellDiv}>
              <span>CNH</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Vencimento</span>
            </div>
            <div className={styles.cellDiv}>
              <div className={styles.editButton}>Editar</div>
            </div>
          </div>
          <div className={styles.addDriverButton}>
            <span>Adicionar Motorista</span>
          </div>
        </div>
      </div>
    </div>
  );
}
