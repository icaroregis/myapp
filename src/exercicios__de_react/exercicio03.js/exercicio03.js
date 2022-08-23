import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Produtos from './components/Produtos/Produtos';

export default function Exercicio03() {
  let Pagina;

  const { pathname } = window.location;

  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
}
