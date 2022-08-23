import React, { useState } from "react";

export default function Contadores() {
  const [add, setAdd] = useState(0);

  return (
    <>
      <div>
        <h1>{add}</h1>
      </div>

      <button onClick={() => setAdd(add + 1)}>adicionar</button>
      <button onClick={() => setAdd(add - 1)}>decrementar</button>
    </>
  )
} 