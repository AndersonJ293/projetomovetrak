import styles from "./seletor.module.css";

export default function SeletorRelatorio() {
  return (
    <div className={styles.container}>
      <div className={styles.reportContainer}>
        <div className={styles.individualSelector}>
          <label className={styles.reportText} htmlFor="reportSelector">
            Selecionar Relatório
          </label>
          <select
            className={styles.reportSelector}
            name="reportSelector"
            id="reportSelector"
          >
            <option value="">Selecione</option>
            <option value="">Trajeto</option>
          </select>
        </div>

        <div className={styles.individualSelector}>
          <label className={styles.reportText} htmlFor="reportSelector">
            Selecionar Rota
          </label>
          <select
            className={styles.reportSelector}
            name="reportSelector"
            id="reportSelector"
          >
            <option value="">Selecione</option>
            <option value="">Trajeto</option>
          </select>
        </div>

        <div className={styles.individualSelector}>
          <label className={styles.reportText} htmlFor="reportSelector">
            Grupo de Veículos
          </label>
          <select
            className={styles.reportSelector}
            name="reportSelector"
            id="reportSelector"
          >
            <option value="">Selecione</option>
            <option value="">Trajeto</option>
          </select>
        </div>

        <div className={styles.individualSelector}>
          <label className={styles.reportText} htmlFor="reportSelector">
            Veículos Individuais
          </label>
          <select
            className={styles.reportSelector}
            name="reportSelector"
            id="reportSelector"
          >
            <option value="">Selecione</option>
            <option value="">Trajeto</option>
          </select>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.dateContainer}>
        <p className={styles.reportText}>Período</p>
      </div>
    </div>
  );
}
