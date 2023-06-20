import styles from "./barra.module.css";

interface BarraGraficoProps {
    label: string
    quantity: number
    color: string
}

export default function BarraGrafico(props: BarraGraficoProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.label}>{props.label}</h1>
            <div
                className={styles.bar}
                style={{
                    backgroundColor: props.color,
                    width: `${props.quantity}%`
                }}
            >
                <span>{props.quantity}</span>
            </div>
        </div>
    );
};