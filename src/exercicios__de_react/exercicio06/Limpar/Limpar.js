import React from 'react';
import { useAppContext } from '../GlobalContext/GlobalContext';

export default function Limpar() {
  const { limparContexto } = useAppContext();

  return (
    <>
      <button onClick={limparContexto}>Limpar</button>
    </>
  );
}
