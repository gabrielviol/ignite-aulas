import React, { useState } from "react"
import styles from './NewTask.module.css'

export function NewTask(props) {
    const [title, setTitle] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if (!title.trim()) {
            return;
        }
        props.createTask(title);
        setTitle("");
    }

    function handleChange(e){
        setTitle(e.target.value);
    }

    return(
        <div className={styles.div}>
            <form  onSubmit={handleSubmit}>
                <input
                        type="text"
                        placeholder='Adicione uma nova tarefa'
                        autoComplete="off"
                        value={title}
                        onChange={handleChange}
                    />
                    <button type='submit'>Criar +</button>
            </form>
        </div>
    );
}