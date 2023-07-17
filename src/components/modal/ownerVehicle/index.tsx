import styles from "./ownerVehicle.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface ownerVehicle {
  ownerName: string;
}

export default function OwnerVehicle(props: ownerVehicle) {
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
          <span className={styles.title}>Veículos {props.ownerName}</span>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.vehicleDiv}></div>
        </div>
      </div>
    </div>
  );
}
