import styles from "./cabecalho.module.css";

export default function CabecalhoProprietario() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <span>Nome</span>
        <span>CPF</span>
        <span>Escola</span>
        <span>Situação</span>
        <div className={styles.search_bar}>
          <h4>buscar</h4>
        </div>
        <div className={styles.button}>
            <h3>+ Cadastrar</h3>
        </div>
      </div>
    </div>
  );
}
