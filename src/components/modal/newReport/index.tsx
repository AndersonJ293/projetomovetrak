import styles from "./newReport.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";
import UserIcon from "../../../../public/icons/user.svg";
import CalendarIcon from "../../../../public/icons/calendar.svg";
import NoteIcon from "../../../../public/icons/blacknote.svg";
import BrowserIcon from "../../../../public/icons/browser.svg";

interface NewReport {
  aberto: boolean;
  fechar: (value: any) => void;
}

export default function NewReport(props: NewReport) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        {" "}
        <div className={styles.header}>
          <div
            className={styles.closeButton}
            onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
          <span className={styles.title}>Gerar Novo Relatório</span>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.reportSelector}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Nome</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Tipo de Relatório</span>
              <select className={styles.select} name="situacao" id="situacao">
                <option value="placeHolder" selected disabled>
                  Escolha um Relatório
                </option>
                <option value="motorOcioso">Motor Ocioso</option>
                <option value="rotas">Rotas</option>
              </select>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.reportParameters}>
            <div className={styles.dateSelector}>
              <span className={styles.inputText}>Período</span>
              <div className={styles.dateInputWrapper}>
                <span>De </span>
                <input className={styles.dateInput} type="datetime-local" />
                <span> À </span>
                <input className={styles.dateInput} type="datetime-local" />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Veículos</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>
                Validação de Motor Ocioso
              </span>
              <select className={styles.select} name="validacao" id="validacao">
                <option value="bateria">Bateria</option>
                <option value="ignicao">Ignição</option>
              </select>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Grupo de Veículos</span>
              <input className={styles.input} type="text" required />
            </div>
            <div className={styles.multiInputWrapper}>
              <span className={styles.inputText}>Parâmetros</span>
              <div className={styles.inputLine}>
                <span className={styles.inputSubtitle}>Tensão da Bateria</span>
                <input className={styles.multiInput} type="text" required />
              </div>
              <div className={styles.inputLine}>
                <span className={styles.inputSubtitle}>
                  Tempo para Validação
                </span>
                <input className={styles.multiInput} type="text" required />
              </div>
            </div>
            <div className={styles.multiInputWrapper}>
              <span className={styles.inputText}>Importação de Dados</span>
              <div className={styles.inputLine}>
                <span className={styles.inputSubtitle}>Arquivo</span>
                <input
                  className={styles.multiInput}
                  type="text"
                  placeholder="Escolha um arquivo"
                  required
                />
                <Image
                  className={styles.inputIcon}
                  src={NoteIcon}
                  width={20}
                  height={20}
                  alt="Ícone"
                />
              </div>
              <div className={styles.inputLine}>
                <span className={styles.inputSubtitle}>API</span>
                <input className={styles.multiInput} type="text" required />
                <Image
                  className={styles.inputIcon}
                  src={BrowserIcon}
                  width={20}
                  height={20}
                  alt="Ícone"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.userData}>
            <div className={styles.userLine}>
              <Image
                className={styles.littleIcon}
                src={UserIcon}
                width={15}
                height={15}
                alt="Ícone"
              />
              <p>Responsável: Anderson Junior</p>
            </div>
            <div className={styles.userLine}>
              <Image
                className={styles.littleIcon}
                src={CalendarIcon}
                width={15}
                height={15}
                alt="Ícone"
              />
              <p>Data: 23/06/2023 16:15</p>
            </div>
          </div>
          <div className={styles.button}>
            <span>Salvar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
