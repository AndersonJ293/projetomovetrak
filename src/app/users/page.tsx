import NavBar from "@/components/navbar";
import styles from "./users.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";
import edit from "../../../public/icons/edit.svg";
import phone from "../../../public/icons/phone.svg";
import tash from "../../../public/icons/tash.svg";
import ButtonList from "@/components/buttonList";

export default function Usuarios() {
  const secondaryButtons = [
    {
      icon: phone,
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
            headerTitle="Usuários"
            tableColumns={[
              { title: "Nome" },
              { title: "Login" },
              { title: "Tipo" },
              { title: "Situação" },
            ]}
            actions={
              <ButtonList
                titleButton="Editar"
                iconButton={edit}
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
