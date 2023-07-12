'use client';
import NavBar from "@/components/navbar";
import styles from "./rotas.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";

export default function Rotas() {
  return (
    <>
      <NavBar />

      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <TableComponent
            headerTitle="Rotas"
            tableColumns={[
              { title: "Rota" },
              { title: "Percurso" },
              { title: "Veículo" },
              { title: "Turno" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
