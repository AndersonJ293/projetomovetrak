import styles from "./status.module.css";
import Image from "next/image";
import icon from "../../assets/icons/Assignment.svg";

export default function Status() {
  return (
    <div className={styles.container}>
      <i className={styles.icon}>
        <Image width={10} height={10} alt="" src={icon} />
      </i>
      <p className={styles.text}>Inativo</p>
    </div>
  );
}
