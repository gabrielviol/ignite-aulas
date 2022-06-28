import { Header } from "./components/Header";
import { Post } from "./Post"

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Gabriel Viol"
        content="Que legal, aprendi!!!"
      />
    </>
  )
}