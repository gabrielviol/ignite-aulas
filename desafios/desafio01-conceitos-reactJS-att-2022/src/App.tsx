import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/ListTaks'
import './global.css'

export function App() {

const task = [
  {
    title: 'Terminar o desafio',
    isComplete: true
  },
  {
    title: 'Jogar bola',
    isComplete: false
  }

]

  return (
    <>
      <Header />
      <main>
        <NewTask />
        {task.map(task => {
          return (
            <Tasks />
          )
        })}
        
      </main>
    </>
  )
}