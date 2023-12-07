import React from "react";
import '../stylesheets/Button.css';

function Button({ text, esBotondeClick, manejarClick }) {
  return(
    <button
      className={esBotondeClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={manejarClick}>
      {text}
    </button>
  );
}

export default Button;