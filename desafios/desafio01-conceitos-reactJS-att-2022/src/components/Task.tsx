import { useState } from 'react';
import styles from './Task.module.css'

interface PropsTask {
    title: string;
    isComplete: boolean
}

export function Task({ title, isComplete }: PropsTask) {

    return(

    <div className={styles.task}>
        <input type="checkbox" name='valor'/>
        <strong>{title}</strong>
        
    </div>
        
    )
}