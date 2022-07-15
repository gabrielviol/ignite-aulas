import styles from './ListTasks.module.css'
import { Task } from './Task'

export function Tasks(){
    return(
        <div className={styles.top}>
            <div className={styles.div}>
                <p className={styles.criadas}>Tarefas criadas</p>
                <p className={styles.criadas}>Concluídas</p>
            </div>
            <Task />
        </div>
    )
}