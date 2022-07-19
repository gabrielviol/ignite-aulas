import { Trash } from 'phosphor-react'
import { useState, ChangeEvent, FormEvent } from 'react'
import styles from './Task.module.css'

interface PropsTask {
    title: string;
    isComplete: boolean;
    onDeleteTask: (title: string) => void;
}

export function Task({ title, isComplete, onDeleteTask }: PropsTask) {

    const [checked, setChecked] = useState(false);


    function handleDeleteTask() {
        onDeleteTask(title);
    }

    function handleChecked(event: ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked);
        console.log(checked)
    }

    return (

        <div className={styles.task}>
            <div>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChecked}
                />
                <strong>{title}</strong>
            </div>
            <button onClick={handleDeleteTask}> <Trash size={20} /> </button>

        </div>

    )
}