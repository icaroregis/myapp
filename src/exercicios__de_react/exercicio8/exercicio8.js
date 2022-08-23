const nomes = ["Pedro", "Mari", "Clodoaldo", "Yuri", "Icaro", "Amanda"];

export default function renderizadorDeListas() {
  return (

    <div>
      <ul>
        {nomes.map((nome, index) => {
          return (
            <li key={index}>{nome}</li>
          )
        })}
      </ul>
    </div>
  )
}