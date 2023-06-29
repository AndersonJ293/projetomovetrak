import styles from "./modal.module.css";
import Image from "next/image";
import svg from "../../../assets/deletesvg.svg";

const ConfirmDeletion = ({ title, description, onClose, onDelete }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <Image
          className={styles.svg}
          width={360}
          height={266}
          src={svg}
          alt="Foto "
        />
        <p>{description}</p>
        <div className={styles.modalButtons}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.deleteButton} onClick={onDelete}>
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletion;
