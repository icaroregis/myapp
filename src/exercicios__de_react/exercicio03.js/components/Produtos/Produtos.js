import React from 'react';
import Produto from '../Produto/Produto';
import Titulo from '../Titulo/Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

export default function Produtos() {
  return (
    <div>
      <Titulo text="Produtos" />
      {produtos.map((produto) => {
        return <Produto key={produto.nome} {...produto} />;
      })}
    </div>
  );
}
