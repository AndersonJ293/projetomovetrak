import styles from "./cabecalho.module.css";
import Image from "next/image";

import searchIcon from "@/assets/icons/search.png";

export default function CabecalhoProprietario() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span className={styles.name}>Nome</span>
        <span className={styles.cpf}>CPF</span>
        <span className={styles.school}>Escola</span>
        <span className={styles.situation}>Situação</span>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.searchBar}>
          <Image src={searchIcon} width={18} height={18} alt="Icone de busca" />
          <input placeholder="Buscar" />
        </div>

        <div className={styles.button}>
          <span>Cadastrar</span>
        </div>
      </div>
    </div>
  );
}
