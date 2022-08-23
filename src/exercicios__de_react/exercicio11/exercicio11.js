import React, { useState } from "react";

export default function EsconderElemento() {
  const [hideElement, setHideElement] = useState(true);

  return (
    <>
      <div style={{ display: hideElement ? "none" : "block" }}>Aparecendo</div>

      <button onClick={() => setHideElement(!hideElement)}>mostrar elemento</button>
    </>
  )
} 