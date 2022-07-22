import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const tasks = [
  {
    id: 'blabla345',
    title: 'Arrumar o quarto',
    completed: false
  },
  {
    id: 'gabriel',
    title: 'Terminar defasio Ignite',
    completed: true
  },
  {
    id: 'blabaala65654',
    title: 'Terminar defasio Ignite',
    completed: true
  },
  {
    id: 'blablssa65654',
    title: 'Terminar defasio Ignite',
    completed: false
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={tasks}/>
  </React.StrictMode>
)


