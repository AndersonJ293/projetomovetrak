"use client";
import styles from "./ownerDrivers.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";
import { useState } from "react";
import DriverModal from "../driverModal";

interface ownerDrivers {
  ownerName: string;
  aberto: boolean;
  fechar: (value: any) => void;
}

export default function OwnerDrivers(props: ownerDrivers) {
  const [modalAberto, setModalAberto] = useState(false);
  const [funcaoModal, setFuncaoModal] = useState("");

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
        <DriverModal
          title={funcaoModal}
          aberto={modalAberto}
          fechar={setModalAberto}
        />
      );
    }

    return (
      <DriverModal
        title={funcaoModal}
        aberto={modalAberto}
        fechar={setModalAberto}
      />
    );
  }

  return (
    <div className={styles.modalBackground}>
      {modalAberto ? renderizarModal() : ""}
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <div
            className={styles.closeButton}
            onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
          <span className={styles.title}>Motoristas {props.ownerName}</span>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.driverHeader}>
            <div className={styles.cellDiv}>
              <span>Nome</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Contato</span>
            </div>
            <div className={styles.cellDiv}>
              <span>CNH</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Vencimento CNH</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Ações</span>
            </div>
          </div>

          <div className={styles.driverDiv}>
            <div className={styles.cellDiv}>
              <span>Nome</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Contato</span>
            </div>
            <div className={styles.cellDiv}>
              <span>CNH</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Vencimento</span>
            </div>
            <div className={styles.cellDiv} onClick={() => botaoEditar()}>
              <div className={styles.editButton}>Editar</div>
            </div>
          </div>
          <div
            className={styles.addDriverButton}
            onClick={() => botaoCadastrar()}
          >
            <span>Adicionar Motorista</span>
          </div>
        </div>
      </div>
    </div>
  );
}
