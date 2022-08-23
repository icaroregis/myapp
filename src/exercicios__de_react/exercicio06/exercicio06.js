import React from 'react';
import { GlobalContext } from '../exercicio06/GlobalContext/GlobalContext';
import Limpar from './Limpar/Limpar';
import Produtoex06 from './Produtoex06/Produtoex06';

export default function Exercicio06() {
  return (
    <GlobalContext>
      <Produtoex06 />
      <Limpar />
    </GlobalContext>
  );
}
