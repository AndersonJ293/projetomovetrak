import styles from "./searchBar.module.css";
import SearchIcon from "../../../public/icons/search.svg";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <Image
        width={30}
        height={30}
        src={SearchIcon}
        alt="Ícone de busca."
        className={styles.icon}
      />
      <input className={styles.input} placeholder="Buscar"></input>
    </div>
  );
}
