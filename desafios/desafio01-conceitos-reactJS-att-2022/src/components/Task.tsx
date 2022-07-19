import { Trash} from 'phosphor-react'
import { useState } from 'react';
import styles from './Task.module.css'

interface PropsTask {
    title: string;
    isComplete: boolean;
    onDeleteTask: (title: string) => void;
    
}

export function Task({ title, isComplete, onDeleteTask}: PropsTask) {

    function handleDeleteTask() {
        onDeleteTask(title);
    }

    return(

    <div className={styles.task}>
        <div>
            <input 
                type="checkbox"
                checked={isComplete}
            />
            <strong>{title}</strong>
        </div>        
            <button onClick={handleDeleteTask}> <Trash size={20}/> </button>
                
    </div>
        
    )
}