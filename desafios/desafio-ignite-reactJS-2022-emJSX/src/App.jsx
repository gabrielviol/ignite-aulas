import React, { useState } from "react";

import { NewTask } from './components/NewTask';
import { Header } from './components/Header';
import { Task } from './components/Task';

import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css'
import './global.css'

export function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
    .map(task => {
      return (<Task
        id={task.id}
        title={task.title}
        completed={task.completed}
        key={task.id}
        toggleTaskChecked={toggleTaskCompleted}
        deleteTask={deleteTask}
      />)
    });

  // const tasksCompletedd = taskList
  // .filter()

  function createTask(title) {
    const newTask = { id: uuidv4(), title: title, completed: false };

    setTasks([...tasks, newTask]);
  }
  ` ${taskList.length} de ${taskList.length} `;
  
  // const taskCompleted = tasks.reduce((taskCompleted, taskAtual) =>{
    
  //   taskCompleted[taskAtual.title ] = [taskAtual.title ] || [] 
  //   taskCompleted[taskAtual.title].push(taskAtual);

  //   return taskCompleted;
    
  // }, {})
  function changeCompletes(arrayCompleted, itemAtual){
    if(itemAtual.completed === true){
      arrayCompleted.push(itemAtual.push);
    }
    return arrayCompleted
  }

  const taskCompleted = tasks.reduce(changeCompletes, [])
  console.log(taskCompleted)
  
  const agreementTask = taskCompleted.length > 1 ? 'Concluídas' : 'Concluída';

  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <NewTask createTask={createTask} />
          <div className={styles.headerContent}>
            <strong>Tarefas criadas <div>{taskList.length}</div></strong>
            <strong>{agreementTask}<div>{taskCompleted.length}</div></strong>
          </div>
          {taskList}
        </div>
      </main>
    </>
  )
}