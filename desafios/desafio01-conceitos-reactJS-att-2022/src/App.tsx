import { Header } from './components/Header'
import { Task } from './components/Task'
import './global.css'
import styles from './App.module.css'
import { useState, FormEvent, ChangeEvent } from 'react'

const task = [
  {
    title: 'Arrumar o quarto',
    isComplete: true,
  }
]

export function App() {

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

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeleteOne);
  }

  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  return (
    <>
      <Header />

      <div className={styles.div}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button type='submit' onClick={handleCreateTask}>Criar +</button>
      </div>
      <div className={styles.wrapper}>
        <main>

          {tasks.map(tasks => {
            return (
              <Task
                title={tasks}
                isComplete={true}
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