import NavBar from "@/components/navbar";
import styles from "./relatorios.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";
import edit from "../../../public/icons/edit.svg";
import eye from "../../../public/icons/eye.svg";
import tash from "../../../public/icons/tash.svg";
import exportIcon from "../../../public/icons/export.svg";
import ButtonList from "@/components/buttonList";

export default function Relatorios() {
  const secondaryButtons = [
    {
      icon: edit,
      action: () => {
        console.log("modal editar");
      },
    },
    {
      icon: eye,
      action: () => {
        console.log("modal vizualiar");
      },
    },
    {
      icon: tash,
      action: () => {
        console.log("modal apagar");
      },
    },
  ];
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
            actions={
              <ButtonList
                titleButton="Exportar"
                iconButton={exportIcon}
                actionButton={() => {
                  console.log("modal editar");
                }}
                secondaryButtons={secondaryButtons}
              />
            }
          />
        </div>
      </div>
    </>
  );
}
