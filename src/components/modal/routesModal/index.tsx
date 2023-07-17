import styles from "./routesModal.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface routesModal {
  title: string;
}

export default function RoutesModal(props: routesModal) {
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
          <span className={styles.title}>{props.title} Rota</span>
        </div>

        <div className={styles.contentContainer}>
          <span className={styles.subTitle}>Informações da Rota</span>
          <div className={styles.inputsDiv}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Nome da Rota*</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Percurso da Rota</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Turno da Rota</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Identificação da Rota</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Escola Vinculada</span>
              <input className={styles.input} type="text" />
            </div>
          </div>

          <div className={styles.divider} />

          <span className={styles.subTitle}>Informações de Vínculo</span>
          <div className={styles.inputsDiv}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Veículo</span>
              <select className={styles.select} name="veiculo" id="veiculo">
                <option value="vivo">Vivo</option>
              </select>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Modelo Veículo</span>
              <input className={styles.input} type="text" disabled />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Proprietário</span>
              <input className={styles.input} type="text" disabled />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Motorista</span>
              <input className={styles.input} type="text" disabled />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>CNH Motorista</span>
              <input className={styles.input} type="text" disabled />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.button}>
            <span>{props.title === "Editar" ? "Salvar" : "Cadastrar"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
