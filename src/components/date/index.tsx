import styles from "./date.module.css"

export default function Date() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Hoje</span>
            <span className={styles.subtitle}>Segunda, Mai 22, 2023</span>
        </div>
    )
}