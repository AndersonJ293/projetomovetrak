import styles from './total.module.css'

export default function Total() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Total de Rotas</div>
            <div className={styles.value}>200</div>
        </div>
    )
}