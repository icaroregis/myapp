import React from 'react';
import { useAppContext } from './../GlobalContext/GlobalContext';

export default function Produtoex06() {
  const { dados } = useAppContext();

  if (dados && dados.length > 0) {
    return (
      <>
        <section>
          Produto:
          {dados.map((produto) => {
            return <li key={produto.id}>{produto.nome}</li>;
          })}
        </section>
      </>
    );
  }
}
