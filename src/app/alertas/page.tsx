"use client";
import NavBar from "@/components/navbar";
import styles from "./alertas.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";

export default function Alertas() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <TableComponent
            headerTitle="Alertas"
            tableColumns={[
              { title: "Nome" },
              { title: "Tipo" },
              { title: "Cliente" },
              { title: "Situação" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
