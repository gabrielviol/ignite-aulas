import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const tasks = [
  {
    id: 1,
    title: 'Arrumar o quarto',
    checked: false
  },
  {
    id: 1,
    title: 'Terminar defasio Ignite',
    checked: true
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={tasks}/>
  </React.StrictMode>
)
