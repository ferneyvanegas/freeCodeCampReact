import React from "react";
import '../styesheets/Button.css'

function Button(props) {

  const esOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div
      className={`button-container ${esOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick = {() => props.handlerClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;