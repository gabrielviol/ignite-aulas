import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=30" alt="" />

            <div className={styles.profile}>
                <strong>Gabriel Viol</strong>
                <span>Desenvolvedor front-end</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )    
}