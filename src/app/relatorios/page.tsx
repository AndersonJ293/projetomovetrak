"use client";
import NavBar from "@/components/navbar";
import styles from "./relatorios.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";
import edit from "../../../public/icons/edit.svg";
import eye from "../../../public/icons/eye.svg";
import tash from "../../../public/icons/tash.svg";
import exportIcon from "../../../public/icons/export.svg";
import ButtonList from "@/components/buttonList";
import { useState } from "react";
import NewReport from "@/components/modal/newReport";
import ReportEditModal from "@/components/modal/reportEdit";
import ReportView from "@/components/modal/reportView";
import ConfirmDeletion from "@/components/modal/confirmDeletion";

export default function Relatorios() {
  const [modalAberto, setModalAberto] = useState(false);
  const [deleteModalAberto, setDeleteModalAberto] = useState(false);
  const [viewModalAberto, setViewModalAberto] = useState(false);
  const [editModalAberto, setEditModalAberto] = useState(false);

  const secondaryButtons = [
    {
      icon: edit,
      action: () => {
        setEditModalAberto(true);
      },
    },
    {
      icon: eye,
      action: () => {
        setViewModalAberto(true);
      },
    },
    {
      icon: tash,
      action: () => {
        setDeleteModalAberto(true);
      },
    },
  ];

  function renderizarModal() {
    return <NewReport aberto={modalAberto} fechar={setModalAberto} />;
  }

  function renderizarEdit() {
    return (
      <ReportEditModal
        aberto={editModalAberto}
        fechar={setEditModalAberto}
        title="Teste"
        subtitle="Teste"
        value=""
        label="Nome"
        buttonText="Salvar"
      />
    );
  }

  function renderizarView() {
    return (
      <ReportView
        aberto={viewModalAberto}
        fechar={setViewModalAberto}
        reportName="Motor Ocioso"
      />
    );
  }

  function renderizarDelete() {
    return (
      <ConfirmDeletion
        aberto={deleteModalAberto}
        fechar={setDeleteModalAberto}
        title="Apagar Relatório"
        description="Teste"
      />
    );
  }

  return (
    <>
      {modalAberto ? renderizarModal() : ""}
      {editModalAberto ? renderizarEdit() : ""}
      {viewModalAberto ? renderizarView() : ""}
      {deleteModalAberto ? renderizarDelete() : ""}
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
                actionButton={() => {}}
                secondaryButtons={secondaryButtons}
              />
            }
            botaoCadastrar={() => setModalAberto(true)}
          />
        </div>
      </div>
    </>
  );
}
