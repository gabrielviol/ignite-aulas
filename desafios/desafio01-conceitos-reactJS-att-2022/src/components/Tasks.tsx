import styles from './Tasks.module.css'

export function Tasks(){
    return(
        <div className={styles.div}>
            <p className={styles.criadas}>Tarefas criadas</p>
            <p className={styles.criadas}>Concluídas</p>
        </div>
    )
}