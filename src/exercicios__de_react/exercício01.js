// Mostre os dados da aplicação, como aprensentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

export default function Exercicio01() {
  const dados = mario;

  //replace para substituir os dados por outros dados
  const total = dados.compras.map((item) =>
    Number(item.preco.replace('R$ ', '')),
  );

  //reduce para somar o total de valores de um array
  const totalGeral = total.reduce((a, b) => a + b);

  return (
    <div>
      <h1>Nome: {dados.cliente}</h1>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'ATIVA' : 'INATIVA'}
        </span>
      </p>
      <p>Total Gasto: {totalGeral}</p>
    </div>
  );
}
