"use client";
import styles from "./ownerVehicle.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";
import { useState } from "react";
import VehicleModal from "../vehicleModal";

interface ownerVehicle {
  ownerName: string;
  aberto: boolean;
  fechar: (value: any) => void;
}

export default function OwnerVehicle(props: ownerVehicle) {
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
        <VehicleModal
          title={funcaoModal}
          aberto={modalAberto}
          fechar={setModalAberto}
        />
      );
    }

    return (
      <VehicleModal
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
          <span className={styles.title}>Veículos {props.ownerName}</span>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.vehicleHeader}>
            <div className={styles.cellDiv}>
              <span>Placa</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Modelo</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Ano</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Cor</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Ações</span>
            </div>
          </div>

          <div className={styles.vehicleDiv}>
            <div className={styles.cellDiv}>
              <span>Placa</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Modelo</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Ano</span>
            </div>
            <div className={styles.cellDiv}>
              <span>Cor</span>
            </div>
            <div className={styles.cellDiv}>
              <div className={styles.editButton} onClick={() => botaoEditar()}>
                Editar
              </div>
            </div>
          </div>
          <div
            className={styles.addVehicleButton}
            onClick={() => botaoCadastrar()}
          >
            <span>Adicionar Veículo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
