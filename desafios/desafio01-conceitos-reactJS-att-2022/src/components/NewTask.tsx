import styles from './NewTask.module.css'

export function NewTask() {
    return (
        <div className={styles.div}>
            <input type="text"  />
            <button>Criar</button>
        </div>
    )
}