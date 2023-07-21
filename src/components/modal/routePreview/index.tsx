import styles from "./routePreview.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface RoutePreview {
  routeName: string;
  aberto: boolean;
  fechar: (value: any) => void;
}

export default function RoutePreview(props: RoutePreview) {
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
          <span className={styles.title}>{props.routeName}</span>
        </div>
        <div className={styles.contentContainer}>
          <div>Foto da Rota aqui</div>
        </div>
      </div>
    </div>
  );
}
