import styles from "./modal.module.css";
import Image from "next/image";
import svg from "../../../assets/deletesvg.svg";

interface ConfirmDeletion {
  title: string;
  description: string;
  onClose: any;
  onDelete: any;
}

const ConfirmDeletion = (props: ConfirmDeletion) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{props.title}</h2>
        <Image
          className={styles.svg}
          width={360}
          height={266}
          src={svg}
          alt="Foto "
        />
        <p>{props.description}</p>
        <div className={styles.modalButtons}>
          <button className={styles.cancelButton} onClick={props.onClose}>
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
