import styles from "./userHeader.module.css";
import Image from "next/image";
import ThreeDots from "../../../public/icons/more.svg";
import ProfilePlaceholder from "../../../public/icons/person.svg";

interface UserHeaderProps {
  nome: string;
  login: string;
}

export default function UserHeader(props: UserHeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          className={styles.foto}
          width={45}
          height={45}
          alt=""
          src={ProfilePlaceholder}
        />
        <div className={styles.info}>
          <h1 className={styles.nome}>{props.nome}</h1>
          <h2 className={styles.email}>{props.login}</h2>
        </div>
      </div>
      <div className={styles.iconDiv}>
        <Image width={30} height={30} alt="" src={ThreeDots} />
      </div>
    </div>
  );
}
