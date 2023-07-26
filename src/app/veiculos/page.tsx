"use client";
import NavBar from "@/components/navbar";
import styles from "./veiculos.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";

export default function Veiculos() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <TableComponent
            headerTitle="Veículos"
            tableColumns={[
              { title: "Placa" },
              { title: "Modelo" },
              { title: "Cliente" },
              { title: "Situação" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
