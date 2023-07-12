'use client';
import NavBar from "@/components/navbar";
import styles from "./proprietarios.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";
import car from "../../../public/icons/carWhite.svg";
import person from "../../../public/icons/personDone.svg";
import navigation from "../../../public/icons/mapWhite.svg";
import phone from "../../../public/icons/phone.svg";
import edit from "../../../public/icons/edit.svg";
import ButtonList from "@/components/buttonList";

export default function Proprietarios() {
  const secondaryButtons = [
    {
      icon: car,
      action: () => {
        console.log("modal veiculo");
      },
    },
    {
      icon: person,
      action: () => {
        console.log("modal motorista");
      },
    },
    {
      icon: navigation,
      action: () => {
        console.log("modal rotas");
      },
    },
    {
      icon: phone,
      action: () => {
        console.log("modal contato");
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
            headerTitle="Proprietários"
            tableColumns={[
              { title: "Nome" },
              { title: "CPF" },
              { title: "Escola" },
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
