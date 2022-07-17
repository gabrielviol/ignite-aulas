import { useState, FormEvent, ChangeEvent } from 'react'
import styles from './NewTask.module.css'
import { Task } from './Task';

export function NewTask() {

    const [tasks, setTasks] = useState ([
        'Limpar o quarto'
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTaskText]);
        setNewTaskText('')
        console.log(tasks)
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
        {tasks.map(task => {
            return(
                <Task 
                title={tasks}
                isComplete={true}
            />
            )
        })
            
        }
        </>
    )
}