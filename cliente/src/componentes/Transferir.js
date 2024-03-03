import React, { useState } from 'react'
import  realizarTransferencia  from '../functions/transferir.js'
import enviarmensaje from '../functions/mensajes.js'

function Transferir({ data, saldo, user, token }) {
    const [transferencia, setTransferencia] = useState(0)
    const [cuentaTo, setCuentaTo] = useState('')

    const handleChangeCuenta = (e) => {
        e.preventDefault()
        setCuentaTo(e.target.value)
    }
    const handleChangeAmount = (e) => {
        e.preventDefault()
        setTransferencia(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        realizarTransferencia(transferencia,cuentaTo,user,token)

    }
    return (
        <div className="operation operation--transfer  p-2">
            <h2>TRANSFERENCIAS</h2>
            <form className="form form--transfer" onSubmit={handleSubmit}>
                <label className="form__label ">TransferIr a:</label>
                <input type="text" className="form__input form__input--to " id="transferir-cuenta" onChange={handleChangeCuenta} /><br />
                <label className="form__label">Cantidad</label>
                <input type="number" id="amountTrans" className="form__input form__input--amount" onChange={handleChangeAmount} />
                <button className="form__btn form__btn--transfer" id="btn-transfer">&rarr;</button>


            </form>
        </div>
    )
}

export default Transferir