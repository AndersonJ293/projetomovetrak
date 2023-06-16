import styles from './lembretes.module.css'

export default function Lembretes() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lembretes</h1>
            <div className={styles.table}>
                <div className={styles.line}>
                    <span className={styles.name}>CES5H07</span>
                    <span className={styles.text}>IPVA Atrasado</span>
                </div>
            </div>
        </div>
    )
}