import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/ListTaks'
import './global.css'

export function App() {

  return (
    <>
      <Header />
      <NewTask />
      <Tasks />
    </>
  )
}