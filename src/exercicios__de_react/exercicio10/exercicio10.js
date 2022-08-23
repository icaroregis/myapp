import React, { useState } from "react";

export default function RemoverElemento() {
  const [addElement, setAddElement] = useState(true);

  return (
    <>
      {addElement ? <div>Elemento Ativo</div> : ""}

      <button onClick={() => setAddElement(!addElement)}>mostrar elemento</button>
    </>
  )
} 