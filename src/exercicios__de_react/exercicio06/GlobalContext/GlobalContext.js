import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export function useAppContext() {
  return useContext(Context);
}

export function GlobalContext({ children }) {
  const [dados, setDados] = useState([]);

  function limparContexto() {
    setDados('');
  }

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <Context.Provider value={{ dados, limparContexto }}>
      {children}
    </Context.Provider>
  );
}
