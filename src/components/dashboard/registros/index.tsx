import styles from "./registros.module.css";

export default function RegistrosDashboard() {
  function renderizarEntradas() {
    return (
      <div className={styles.entry}>
        <p className={styles.typeText}>Cadastro</p>
        <p className={styles.actionText}>
          Motorista Anderson Junior Cadastrado
        </p>
        <p className={styles.userText}>Victor Castro</p>
        <p className={styles.dateText}>22/05 11:30</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titleText}>Últimos Registros</h1>
        <div className={styles.seeAllButton}>
          <span className={styles.buttonText}>Ver Todos</span>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.subHeader}>
          <p className={styles.typeText}>Tipo</p>
          <p className={styles.actionText}>Ação</p>
          <p className={styles.userText}>Usuário</p>
          <p className={styles.dateText}>Data</p>
        </div>
        {renderizarEntradas()}
        {renderizarEntradas()}
        {renderizarEntradas()}
      </div>
      <div className={styles.pageSelector}>
        <p className={styles.selectorText}>1 - 3 de 20</p>
        <div className={styles.changePage}>{`<`}</div>
        <div className={styles.changePage}>{`>`}</div>
      </div>
    </div>
  );
}
