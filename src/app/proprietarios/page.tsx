import NavBar from "@/components/navbar";
import styles from "./proprietarios.module.css";
import Date from "@/components/date";
import SearchBar from "@/components/searchBar";
import UserHeader from "@/components/userHeader";
import CabecalhoProprietario from "@/components/proprietarios/cabecalho";
import DadosProprietarios from "@/components/proprietarios/dados";

export default function Proprietarios() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.headerLine}>
          <Date />
          <SearchBar />
          <UserHeader />
        </div>
        <div className={styles.screen}>
          <CabecalhoProprietario />

          <DadosProprietarios />
        </div>
      </div>
    </>
  );
}
