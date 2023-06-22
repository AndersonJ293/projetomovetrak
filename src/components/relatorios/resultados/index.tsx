import styles from "./resultados.module.css";

export default function ResultadosRelatorio() {
  return (
    <div className={styles.container}>
      <div className={styles.reportHeader}>
        <span className={styles.agrupamento}>Agrupamento</span>
        <span className={styles.rota}>Rota</span>
        <span className={styles.itinerario}>Itinerário</span>
        <span className={styles.inicio}>Inicío</span>
        <span className={styles.fim}>Fim</span>
        <span className={styles.quilometragem}>Quilometragem</span>
        <span className={styles.duracao}>Duração</span>
        <span className={styles.teste}>Teste</span>
      </div>
      <div className={styles.reportResult}>
        <span className={styles.agrupamento}>PLL6H83</span>
        <span className={styles.rota}>Rota Ida 5km</span>
        <span className={styles.itinerario}>
          Brotas De Macaúbas, BA 47560-000, Brasil - Lagoa Do Dionísio, BA,
          Brasil
        </span>
        <span className={styles.inicio}>23.05.2023 07:00:00</span>
        <span className={styles.fim}>23.05.2023 12:30:00</span>
        <span className={styles.quilometragem}>12 km</span>
        <span className={styles.duracao}>02:00:00</span>
        <span className={styles.teste}>
          aisgasghasgojihsjhnsujdhsdjdgsldgjasgfagasgsgasgsagsgisdgsdhsdhfdhshsfgh
        </span>
      </div>
    </div>
  );
}
