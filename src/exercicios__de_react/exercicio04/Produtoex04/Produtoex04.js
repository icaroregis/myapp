import React from 'react';

export default function Produtoex04({ dados }) {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>{dados.preco ? `R$ ${dados.preco}` : ''}</p>
      <img
        src={dados.fotos ? dados.fotos[0].src : ''}
        alt={dados.fotos ? dados.fotos[0].titulo : ''}
      />
    </>
  );
}
