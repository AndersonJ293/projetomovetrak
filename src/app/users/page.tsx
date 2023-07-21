"use client";
import NavBar from "@/components/navbar";
import styles from "./users.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";
import edit from "../../../public/icons/edit.svg";
import phone from "../../../public/icons/phone.svg";
import tash from "../../../public/icons/tash.svg";
import ButtonList from "@/components/buttonList";
import { useState } from "react";
import UserRegistrationModal from "@/components/modal/userRegistration";
import ModalContacts from "@/components/modal/contacts";
import ConfirmDeletion from "@/components/modal/confirmDeletion";

export default function Usuarios() {
  const [modalAberto, setModalAberto] = useState(false);
  const [funcaoModal, setFuncaoModal] = useState("");
  const [nomeModal, setNomeModal] = useState("");
  const [emailModal, setEmailModal] = useState("");
  const [loginModal, setLoginModal] = useState("");
  const [tipoUsuarioModal, setTipoUsuarioModal] = useState("");
  const [modalContatoAberto, setModalContatoAberto] = useState(false);
  const [deleteModalAberto, setDeleteModalAberto] = useState(false);

  const secondaryButtons = [
    {
      icon: phone,
      action: () => {
        setModalContatoAberto(true);
      },
    },
    {
      icon: tash,
      action: () => {
        setDeleteModalAberto(true);
      },
    },
  ];

  const botaoCadastrar = () => {
    setFuncaoModal("Cadastrar");
    setModalAberto(true);
  };

  const botaoEditar = () => {
    setFuncaoModal("Editar");
    setNomeModal("Teste");
    setEmailModal("teste@movetrak.com");
    setLoginModal("teste@login");
    setTipoUsuarioModal("admin");
    setModalAberto(true);
  };

  function renderizarModal() {
    if (funcaoModal === "Cadastrar") {
      return (
        <UserRegistrationModal
          funcao={funcaoModal}
          aberto={modalAberto}
          fechar={setModalAberto}
        />
      );
    }
    return (
      <UserRegistrationModal
        funcao={funcaoModal}
        nome={nomeModal}
        email={emailModal}
        login={loginModal}
        tipoUsuario={tipoUsuarioModal}
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

  function renderizarDelete() {
    return (
      <ConfirmDeletion
        title="Apagar Usuário"
        description="Tem certeza que deseja apagar esse usuário?"
        aberto={deleteModalAberto}
        fechar={setDeleteModalAberto}
      />
    );
  }
  return (
    <>
      <NavBar />
      {modalAberto ? renderizarModal() : ""}
      {modalContatoAberto ? renderizarContato() : ""}
      {deleteModalAberto ? renderizarDelete() : ""}
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
