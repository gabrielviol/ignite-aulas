import React, { useState, useRef, useEffect } from "react";

import { NewTask } from './components/NewTask';
import { Header } from './components/Header';
import { Task } from './components/Task';

import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css'
import './global.css'
import FilterButton from "./components/FilterButton";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


export function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

 

  function toggleTaskChecked(id) {
    const updateTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, checked: !task.checked }
      }
      return task;
    })
    setTasks(updateTasks)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => {
    <Task
      id={task.id}
      title={task.title}
      checked={task.checked}
      toggleTaskChecked={toggleTaskChecked}
      deleteTask={deleteTask}
    />
  });

  const filterList = FILTER_NAMES.map(title => (
    <FilterButton
      key={title}
      name={title}
      isPressed={title === filter}
      setFilter={setFilter}
    />
  ));

  function createTask(title) {
    const newTask = { id: uuidv4(), title: title, checked: false };

    setTasks([...tasks, newTask]);
    console.log(tasks)
  }


  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <NewTask createTask={createTask}/>
          {filterList}
          
        </div>
        <ul>
        {taskList}
      </ul>
      </main>

    </>
  )
}