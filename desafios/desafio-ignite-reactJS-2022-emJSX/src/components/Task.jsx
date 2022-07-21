import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task(props) {
    return (
        <div className={styles.task}>
            <div>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.checked}
                    onChange={() => props.toggleTaskChecked(props.id)}
                />
                <label htmlFor={props.id}>{props.title}</label>
            </div>
            <button
                type="button"
                onClick={() => props.deleteTask(props.id) }
            >
                <Trash size={20} />
            </button>

        </div>
    );
}