import React from "react";

interface RepoItensprops {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepoItensprops) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        <button>Acessar repositorio</button>
      </a>
    </li>
  );
}
