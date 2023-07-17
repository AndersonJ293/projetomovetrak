import styles from "./vehicle.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface vehicleModal {
  title: string;
}

export default function VehicleModal(props: vehicleModal) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <div
            className={styles.closeButton}
            // onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
          <span className={styles.title}>{props.title} Veículo</span>
        </div>

        <div className={styles.contentContainer}>
          <span className={styles.subTitle}>Informações do Veículo</span>
          <div className={styles.inputsDiv}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Situação</span>
              <select className={styles.select} name="situacao" id="situacao">
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="pendente">Pendente</option>
              </select>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Placa</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Modelo</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Montadora</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Tipo</span>
              <select className={styles.select} name="tipo" id="tipo">
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="caminhonete">Caminhonete</option>
                <option value="onibus">Ônibus</option>
                <option value="microonibus">Micro-Ônibus</option>
                <option value="van">Van</option>
                <option value="caminhao">Caminhão</option>
                <option value="maquina">Máquina</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Ano Modelo</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Ano Fabricação</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Cor</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Renavam</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Chassi</span>
              <input className={styles.input} type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.button}>
          <span>{props.title === "Editar" ? "Salvar" : "Cadastrar"}</span>
        </div>
      </div>
    </div>
  );
}
