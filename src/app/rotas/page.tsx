"use client";
import NavBar from "@/components/navbar";
import styles from "./rotas.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";
import eye from "../../../public/icons/eye.svg";
import tash from "../../../public/icons/tash.svg";
import edit from "../../../public/icons/edit.svg";
import { useState } from "react";
import RoutesModal from "@/components/modal/routesModal";
import RoutePreview from "@/components/modal/routePreview";
import ConfirmDeletion from "@/components/modal/confirmDeletion";
import ButtonList from "@/components/buttonList";

export default function Rotas() {
  const [modalAberto, setModalAberto] = useState(false);
  const [funcaoModal, setFuncaoModal] = useState("");
  const [viewModalAberto, setViewModalAberto] = useState(false);
  const [deleteModalAberto, setDeleteModalAberto] = useState(false);

  const secondaryButtons = [
    {
      icon: eye,
      action: () => setViewModalAberto(true),
    },
    {
      icon: tash,
      action: () => setDeleteModalAberto(true),
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
        <RoutesModal
          title={funcaoModal}
          aberto={modalAberto}
          fechar={setModalAberto}
        />
      );
    }

    return (
      <RoutesModal
        title={funcaoModal}
        aberto={modalAberto}
        fechar={setModalAberto}
      />
    );
  }

  function renderizarView() {
    return (
      <RoutePreview
        routeName="Rota Teste"
        aberto={viewModalAberto}
        fechar={setViewModalAberto}
      />
    );
  }

  function renderizarDelete() {
    return (
      <ConfirmDeletion
        title="Apagar Rota"
        description="Certeza que deseja apagar essa rota?"
        aberto={deleteModalAberto}
        fechar={setDeleteModalAberto}
      />
    );
  }

  return (
    <>
      <NavBar />
      {modalAberto ? renderizarModal() : ""}
      {viewModalAberto ? renderizarView() : ""}
      {deleteModalAberto ? renderizarDelete() : ""}

      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <TableComponent
            headerTitle="Rotas"
            tableColumns={[
              { title: "Rota" },
              { title: "Percurso" },
              { title: "Veículo" },
              { title: "Turno" },
            ]}
            actions={
              <ButtonList
                titleButton="Editar"
                iconButton={edit}
                actionButton={() => botaoEditar()}
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
