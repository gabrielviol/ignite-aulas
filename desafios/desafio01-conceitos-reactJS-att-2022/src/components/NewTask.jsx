import { useState } from 'react'
import styles from './NewTask.module.css'

export function NewTask(props) {

    const [title, setTitle] = useState('')

    function handleCreateTask(event) {
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText('')
        
    }
    function handleNewTaskChange(event) {
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
                    onChange={handleNewTaskChange}
                />
                <button type='submit' onClick={handleCreateTask}>Criar +</button>
            </div>
            <div>
                <main>
                    {tasks.map(tasks => {
                        return (
                            <Task
                                key={tasks}
                                title={tasks}
                                isComplete
                            />
                        )
                    })
                    }
                </main>
            </div>
        </>
    )
}