import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

  const [repositories, setRepositores] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(reponse => reponse.json())
    .then(data => setRepositores(data))
  }, [])

  return(
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>

        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })};

      </ul>
    </section>
  );
}