import styles from "./ownerModal.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface OwnerModal {
  funcao: string;
  aberto: boolean;
  fechar: (value: any) => void;
}

export default function OwnerModal(props: OwnerModal) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <div
            className={styles.closeButton}
            onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
          <span className={styles.title}>{props.funcao} Proprietário</span>
        </div>

        <div className={styles.contentContainer}>
          <span className={styles.subTitle}>Informações Proprietário</span>
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
              <span className={styles.inputText}>Nome*</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Nome Fantasia</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>CPF</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>CNH</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Data de Vencimento CNH</span>
              <input className={styles.input} type="date" />
            </div>
          </div>

          <div className={styles.divider} />

          <span className={styles.subTitle}>Contato</span>
          <div className={styles.inputsDiv}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Tipo</span>
              <select className={styles.select} name="tipo" id="tipo">
                <option value="celular">Celular</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="fixo">Fixo</option>
              </select>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Nome</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Número</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Operadora</span>
              <select className={styles.select} name="operadora" id="operadora">
                <option value="vivo">Vivo</option>
                <option value="claro">Claro</option>
                <option value="oi">Oi</option>
                <option value="tim">Tim</option>
              </select>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Vínculo</span>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.button}>
                <span className={styles.newContactText}>Novo Contato</span>
              </div>
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
        </div>

        <div className={styles.footer}>
          <div className={styles.button}>
            <span>{props.funcao === "Editar" ? "Salvar" : "Cadastrar"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
