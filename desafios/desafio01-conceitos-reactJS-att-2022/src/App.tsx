import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'

const task= [
  {
    title: 'Jogar um game', 
    isComplete:true
  }
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </>
  )
}