import { useState, FormEvent, ChangeEvent } from 'react'
import styles from './NewTask.module.css'
import { Task } from './Task';

export function NewTask() {

    const [tasks, setTasks] = useState([
        'Limpar o quarto'
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText('')
        
    }
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task !== taskToDelete;
        })
        setTasks(tasksWithoutDeleteOne);
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
                                onDeleteTask={deleteTask}
                            />
                        )
                    })
                    }
                </main>
            </div>
        </>
    )
}