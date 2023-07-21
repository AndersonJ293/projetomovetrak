import styles from "./newReport.module.css";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

export default function NewReport() {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        {" "}
        <div className={styles.header}>
          <div
            className={styles.closeButton}
            // onClick={() => props.fechar(false)}
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
              Período
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
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.userData}>
            <p>Responsável: Anderson Junior</p>
            <p>Data: 23/06/2023 16:15</p>
          </div>
          <div className={styles.button}>
            <span>Salvar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
