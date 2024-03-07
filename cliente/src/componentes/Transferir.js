import React, { useState, useRef } from "react";
import realizarTransferencia from "../functions/transferir.js";
import enviarmensaje from "../functions/mensajes.js";
import './transferir.css'

function Transferir({ data, saldo, user, token, updateSaldo }) {
  const [transferencia, setTransferencia] = useState(0);
  const [cuentaTo, setCuentaTo] = useState("");
  const transferBorrar = useRef(null);
  const transferAccountBorrar = useRef(null);
  const mensaje = useRef(null);

  const handleChangeCuenta = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setCuentaTo(e.target.value);
  };
  const handleChangeAmount = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setTransferencia(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    realizarTransferencia(transferencia, cuentaTo, user, token);
    
    if (Number(transferencia) > Number(saldo)) {
      mensaje.current.innerText =
        "No dispone de saldo suficiente,pruebe otra cantidad";
      setTimeout(() => {
        mensaje.current.style.display = "none";
      }, 2000);
      mensaje.current.value='no dispone de saldo suficiente'
      transferBorrar.current.value = "";

      return;
    }
    updateSaldo(-Number(transferencia));
    transferAccountBorrar.current.value = "";
    transferBorrar.current.value = "";
  };

  return (
    <>
      <div className="mensaje " ref={mensaje}></div>
      <div className="operation operation--transfer  p-2">
        <h2>TRANSFERENCIAS</h2>
        <form className="form form--transfer" onSubmit={handleSubmit}>
          <label className="form__label ">TransferIr a:</label>
          <input
            type="text"
            className="form__input form__input--to "
            id="transferir-cuenta"
            onChange={handleChangeCuenta}
            ref={transferAccountBorrar}
          />
          <br />
          <label className="form__label">Cantidad</label>
          <input
            type="number"
            id="amountTrans"
            className="form__input form__input--amount"
            onChange={handleChangeAmount}
            ref={transferBorrar}
          />
          <button className="form__btn form__btn--transfer" id="btn-transfer">
            &rarr;
          </button>
        </form>
      </div>
    </>
  );
}

export default Transferir;
