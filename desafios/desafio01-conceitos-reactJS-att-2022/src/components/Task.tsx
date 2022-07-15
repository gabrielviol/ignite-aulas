import stlyes from './Task.module.css'

export function Task() {
    return(
        <div className={stlyes.task}>
            <input type="checkbox" name="todo"/>
        </div>
    )
}