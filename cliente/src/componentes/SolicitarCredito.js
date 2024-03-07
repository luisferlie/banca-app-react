import React from "react";
import enviarMensaje from "../functions/mensajes.js";

function SolicitarCredito() {

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    enviarMensaje("credito solicitado");
  };
  return (
    <div className="operation operation--loan p-2">
      <h2>Solicitar credito</h2>
      <form className="form form--loan" onSubmit={handleSubmit}>
        <input
          type="number"
          className="form__input form__input--loan-amount"
          onChange={handleChange}
        />
        <button className="form__btn form__btn--loan">&rarr;</button>
      </form>
    </div>
  );
}

export default SolicitarCredito;
