import styles from "./modal.module.css";
import Image from "next/image";
import svg from "../../../../public/deletesvg.svg";

interface ConfirmDeletion {
  title: string;
  description: string;
  onDelete?: any;
  aberto: boolean;
  fechar: (value: any) => void;
}

const ConfirmDeletion = (props: ConfirmDeletion) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{props.title}</h2>
        <div className={styles.centerDiv}>
          <Image
            className={styles.svg}
            width={300}
            height={200}
            src={svg}
            alt="Foto "
          />
          <p>{props.description}</p>
        </div>
        <div className={styles.modalButtons}>
          <button
            className={styles.cancelButton}
            onClick={() => props.fechar(false)}
          >
            Cancelar
          </button>
          <button className={styles.deleteButton} onClick={props.onDelete}>
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletion;
