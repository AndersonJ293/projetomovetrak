import BarraGrafico from "./barra";
import styles from "./grafico.module.css";

export default function Grafico() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comunicação dos rastreadores</h1>
            <div className={styles.barsDiv}>
                <BarraGrafico label="< 1 hora" quantity={90} color="#1EB106" />
                <BarraGrafico label="< 3 hora" quantity={60} color="#FDAA0B" />
                <BarraGrafico label="< 12 hora" quantity={20} color="#FF6B00" />
                <BarraGrafico label="Desconectados" quantity={6} color="#FF0101" />
            </div>
        </div>
    )
}