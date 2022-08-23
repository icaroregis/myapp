import React, { useState } from 'react';
import Produtoex04 from '../exercicio04/Produtoex04/Produtoex04';

export default function Exercicio04() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState('');

  async function handleClick(event) {
    event.preventDefault();

    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/notebook`,
    );

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button
        style={{ margin: '5rem' }}
        onClick={(event) => handleClick(event)}
      >
        Notebook
      </button>

      <button
        style={{ margin: '5rem' }}
        onClick={(event) => handleClick(event)}
      >
        smartphone
      </button>

      <button
        style={{ margin: '5rem' }}
        onClick={(event) => handleClick(event)}
      >
        tablet
      </button>

      {carregando && <h1>Carregando...</h1>}
      {!carregando && <Produtoex04 dados={dados} />}
    </>
  );
}
