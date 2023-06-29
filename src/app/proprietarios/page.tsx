import NavBar from "@/components/navbar";
import styles from "./proprietarios.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";

export default function Proprietarios() {
  return (
    <>
      <NavBar />

      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <TableComponent
            headerTitle="Proprietários"
            tableColumns={[
              { title: "Nome" },
              { title: "CPF" },
              { title: "Escola" },
              { title: "Situação" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
