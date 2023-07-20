import styles from "./driverModal.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface driverModal {
  title: string;
}

export default function DriverModal(props: driverModal) {
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
          <span className={styles.title}>{props.title} Motorista</span>
        </div>
        <div className={styles.contentContainer}>
          <span className={styles.subTitle}>Informações Motorista</span>
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
              <span className={styles.inputText}>Nome</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>CPF</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>CNH</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Vencimento CNH</span>
              <input className={styles.input} type="date" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Contato</span>
              <input className={styles.input} type="text" />
            </div>
          </div>

          <div className={styles.divider} />

          <span className={styles.subTitle}>Endereço</span>
          <div className={styles.inputsDiv}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Rua</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Número</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>CEP</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Bairro</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Cidade</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Estado</span>
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
