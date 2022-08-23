import React, { useEffect, useState } from 'react';
import Produtoex05 from '../exercicio05/Produtoex05/Produtoex05';

export default function Exercicio05() {
  const [produto, setProduto] = useState(null);

  function handleClick(event) {
    setProduto(event.target.innerText);
  }

  useEffect(() => {
    if (produto) {
      localStorage.setItem('produto', produto);
    }
  }, [produto]);

  useEffect(() => {
    const preferencia = localStorage.getItem('produto');

    if (preferencia) {
      setProduto(preferencia);
    }
  }, []);

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produtoex05 produto={produto} />
    </>
  );
}
