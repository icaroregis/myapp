import React from 'react';

export default function Produto({ nome, propriedades }) {
  return (
    <div
      style={{ border: '1px solid green', margin: '1rem 0', padding: '1rem' }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => {
          return <li>{propriedade}</li>;
        })}
      </ul>
    </div>
  );
}
