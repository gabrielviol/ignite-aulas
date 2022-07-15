import { useState } from 'react'
import styles from './NewTask.module.css'


export function CreateTask() {
    const [task, setTask] = useState(['']);

}

export function NewTask() {
    return (
        <div className={styles.div}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button onClick={CreateTask}>Criar +</button>
        </div>
    )
}