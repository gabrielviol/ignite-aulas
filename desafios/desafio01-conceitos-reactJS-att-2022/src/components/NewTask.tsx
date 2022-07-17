import { useState, FormEvent, ChangeEvent } from 'react'
import styles from './NewTask.module.css'

interface PropsTask {
    title: string;
    isComplete: boolean
}

export function NewTask({ title, isComplete }: PropsTask ) {

    const [tasks, setTasks] = useState ([
        'Limpar o quarto'
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTaskText]);
        setNewTaskText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }



    return (
        <>
            <div className={styles.div}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa' 
                    value={newTaskText}
                    onChange={handleNewCommentChange}
                />
                <button type='submit' onClick={handleCreateTask}>Criar +</button>
            </div>

            <div className={styles.task}>
                <input type="checkbox" name={title}/>
                <strong>{title}</strong>
            </div>
        </>
    )
}