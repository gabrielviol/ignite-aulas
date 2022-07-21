import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';



export function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('');

  function createTask(title) {
    const newTask = { id:  uuidv4(), title: title, checked: false};

    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>

        <NewTask 
          createTask={createTask}
        />
        
      </div>
    </>
  )
}