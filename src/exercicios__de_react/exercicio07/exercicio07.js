import React, { useState } from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

export default function Exercicio07() {
  const [slide, setSlide] = useState(0);
  const [acertos, setAcertos] = useState(null);
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  function handleChange(event) {
    setRespostas({ ...respostas, [event.target.id]: event.target.value });
  }

  function resultado() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );

    setAcertos(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function proximaPergunta(event) {
    event.preventDefault();

    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      return resultado();
    }
  }

  return (
    <section>
      <form style={{ marginBottom: '2rem', padding: '2rem' }}>
        {perguntas.map((pergunta, index) => {
          console.log(pergunta);
          return (
            <>
              <Radio
                active={slide === index}
                id={pergunta.id}
                key={pergunta}
                value={respostas[pergunta.id]}
                {...pergunta}
                onChange={handleChange}
              />
            </>
          );
        })}
      </form>

      {acertos && <p>{acertos}</p>}
      <button onClick={proximaPergunta}>Próxima pergunta</button>
    </section>
  );
}
