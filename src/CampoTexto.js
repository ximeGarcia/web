import React, { useState } from 'react';

function CampoTexto() {
  // Crear un estado para el valor del campo de texto
  const [valor, setValor] = useState('');

  // Manejar el cambio en el campo de texto
  const manejarCambio = (event) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="campo-texto">numero de partes:</label>
      <input
        type="text"
        id="campo-texto"
        value={valor}
        onChange={manejarCambio}
      />
      </div>
  );
}

export default CampoTexto;