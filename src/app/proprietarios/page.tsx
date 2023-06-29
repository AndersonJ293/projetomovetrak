import NavBar from "@/components/navbar";
import styles from "./proprietarios.module.css";
import CabecalhoProprietario from "@/components/proprietarios/cabecalho";
import DadosProprietarios from "@/components/proprietarios/dados";
import HeaderLine from "@/components/headerLine";

export default function Proprietarios() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <CabecalhoProprietario />

          <DadosProprietarios />
        </div>
      </div>
    </>
  );
}
