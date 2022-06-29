import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/20782852?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}> 
                            <strong>Gabriel Oliveira</strong>
                            <time title='29 de Junho às 16:24h' dateTime='2022-06-29 16:04:32'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}