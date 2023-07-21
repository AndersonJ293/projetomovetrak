"use client";
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
import { useState } from "react";
import OwnerModal from "@/components/modal/ownerModal";
import ModalContacts from "@/components/modal/contacts";
import OwnerRoutesView from "@/components/modal/ownerRoutesView";
import OwnerDrivers from "@/components/modal/ownerDrivers";
import OwnerVehicle from "@/components/modal/ownerVehicle";

export default function Proprietarios() {
  const [modalAberto, setModalAberto] = useState(false);
  const [modalContatoAberto, setModalContatoAberto] = useState(false);
  const [modalRotaAberto, setModalRotaAberto] = useState(false);
  const [modalMotoristaAberto, setModalMotoristaAberto] = useState(false);
  const [modalVeiculosAberto, setModalVeiculosAberto] = useState(false);
  const [funcaoModal, setFuncaoModal] = useState("");

  const secondaryButtons = [
    {
      icon: car,
      action: () => {
        setModalVeiculosAberto(true);
      },
    },
    {
      icon: person,
      action: () => {
        setModalMotoristaAberto(true);
      },
    },
    {
      icon: navigation,
      action: () => {
        setModalRotaAberto(true);
      },
    },
    {
      icon: phone,
      action: () => {
        setModalContatoAberto(true);
      },
    },
  ];

  const botaoCadastrar = () => {
    setFuncaoModal("Cadastrar");
    setModalAberto(true);
  };

  const botaoEditar = () => {
    setFuncaoModal("Editar");
    setModalAberto(true);
  };

  function renderizarModal() {
    if (funcaoModal === "Cadastrar") {
      return (
        <OwnerModal
          funcao={funcaoModal}
          aberto={modalAberto}
          fechar={setModalAberto}
        />
      );
    }

    return (
      <OwnerModal
        funcao={funcaoModal}
        aberto={modalAberto}
        fechar={setModalAberto}
      />
    );
  }

  function renderizarContato() {
    return (
      <ModalContacts
        title="Contato"
        aberto={modalContatoAberto}
        fechar={setModalContatoAberto}
      />
    );
  }

  function renderizarRota() {
    return (
      <OwnerRoutesView
        ownerName="Teste"
        aberto={modalRotaAberto}
        fechar={setModalRotaAberto}
      />
    );
  }

  function renderizarMotorista() {
    return (
      <OwnerDrivers
        ownerName="Teste"
        aberto={modalMotoristaAberto}
        fechar={setModalMotoristaAberto}
      />
    );
  }

  function renderizarVeiculos() {
    return (
      <OwnerVehicle
        ownerName="Teste"
        aberto={modalVeiculosAberto}
        fechar={setModalVeiculosAberto}
      />
    );
  }

  return (
    <>
      <NavBar />
      {modalAberto ? renderizarModal() : ""}
      {modalContatoAberto ? renderizarContato() : ""}
      {modalRotaAberto ? renderizarRota() : ""}
      {modalMotoristaAberto ? renderizarMotorista() : ""}
      {modalVeiculosAberto ? renderizarVeiculos() : ""}

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
                  botaoEditar();
                }}
                secondaryButtons={secondaryButtons}
              />
            }
            botaoCadastrar={() => botaoCadastrar()}
          />
        </div>
      </div>
    </>
  );
}
