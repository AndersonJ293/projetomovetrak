import NavBar from "@/components/navbar";
import styles from "./relatorios.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";

export default function Relatorios() {
  return (
    <>
      <NavBar />

      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <TableComponent
            headerTitle="Relatórios"
            tableColumns={[
              { title: "Nome" },
              { title: "Data" },
              { title: "Tipo" },
              { title: "Responsável" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
