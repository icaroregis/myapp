import React, { useState, useEffect } from 'react';

export default function Produtoex05({ produto }) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (dados) {
    return (
      <>
        <h1>{dados.nome}</h1>
        <p>{`R$ ${dados.preco}`}</p>
      </>
    );
  }
}
