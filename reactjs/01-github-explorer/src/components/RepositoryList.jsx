import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository={
    name: 'unform3',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform',
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories] /*   <-------  Sempre Colocar no minimo um array vazio para nao ficar em loop*/);

    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>


            
        </section>
    )
}