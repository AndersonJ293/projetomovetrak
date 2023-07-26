"use client";
import NavBar from "@/components/navbar";
import styles from "./motoristas.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";

export default function Motoristas() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <TableComponent
            headerTitle="Motoristas"
            tableColumns={[
              { title: "Nome" },
              { title: "CPF" },
              { title: "CNH" },
              { title: "Situação" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
