import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import './global.css'
import styles from './App.module.css'

export function App() {

const task = [
  {

    title: 'Terminar o desafio',
    isComplete: true
  },
  {
    title: 'Jogar bola',
    isComplete: false
  },
]

  return (
    <>
      <Header />
      
      <NewTask 
        
      />
      <div className={styles.wrapper}>
      <main>
        {task.map(task => {
          return (
            <Task
              key={task.title}
              title={task.title}
              isComplete={task.isComplete}
            />
            
          )
        })}
        
      </main>
      </div>
    </>
  )
}