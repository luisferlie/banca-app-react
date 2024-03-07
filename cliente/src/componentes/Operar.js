import React, { useRef, useState } from 'react'
import "./operar.css"
import { ingresar, retirar } from '../functions/ingresarRetirar.js'
import realizarTransferencia from '../functions/transferir.js'
import { solicitarCredito } from '../functions/solicitarCredito.js'
import enviarMensaje from '../functions/mensajes.js'

import Transferir from './Transferir.js'

function Operar({ data, saldo, user, token,updateSaldo }) {
    const [ingreso, setIngreso] = useState(0)

    const [retirada, setRetirada] = useState(0)
    const mensaje = useRef(null)
   const borrarIngreso =useRef(null)
   const borrarRetirada =useRef(null)

    const handleChangeIng = (e) => {
        setIngreso(e.target.value);
        updateSaldo(Number(0))
        console.log(ingreso);
    }
    const handleChangeRet = (e) => {
        setRetirada(e.target.value);
        updateSaldo(Number(0))
        console.log(retirada);
        
    }
    const handleSubmitIng = (e) => {
        e.preventDefault();
        ingresar(ingreso, user, token, e)
        updateSaldo(Number(ingreso))
        borrarIngreso.current.value=''
       
    }
    const handleSubmitRet = (e) => {
        e.preventDefault();
        if (Number(retirada) > Number(saldo)) {
            mensaje.current.innerText = 'No dispone de saldo suficiente,pruebe otra cantidad'
            setTimeout(() => {
                mensaje.current.style.display='none'
            }, 2000);
             enviarMensaje('no dispone de saldo suficiente') 
             borrarRetirada.current.value=''
          
          
            return
        }
        retirar(retirada, user, token, e)
        console.log('ha entrado aquí y llama a update saldo con', retirada)
        borrarRetirada.current.value=''
        updateSaldo(-Number(retirada))
       
    }



    return (
        <>
            <div className="mensaje " ref={mensaje}></div>
            <div class="  operation bg-primary-subtle p-2">
                <h2>OPERACIONES</h2>
                <form className="form form-ingreso" onSubmit={handleSubmitIng}>
                    <label className="form__label ingreso">Ingresar:</label>

                    <input type="number" className="form__input " id="ingreso" onChange={handleChangeIng} ref={borrarIngreso}/>
                    <button className="form__btn " id="ingresarBtn" >&rarr;</button>


                </form>
                <form className="form form-retirada" onSubmit={handleSubmitRet}>
                    <label className="form__label">Retirar</label>
                    <input type="number" className="form__input " id="retirada" onChange={handleChangeRet} ref={borrarRetirada} />
                    <button className="form__btn " id="retirarBtn" >&rarr;</button>
                </form>

            </div>
            <Transferir data={data} saldo={saldo} user={user} token={token} updateSaldo={updateSaldo}/>

            <div className="operation operation--loan p-2">
                <h2>Solicitar credito</h2>
                <form className="form form--loan">

                    <input type="number" className="form__input form__input--loan-amount" />
                    <button className="form__btn form__btn--loan">&rarr;</button>

                </form>
            </div>
            <div class="operation operation--close  p-2">
                <h2>Cerrar cuenta</h2>
                <form class="form form--close">
                    <input type="text" class="form__input form__input--user confirm-user" />
                    <input type="password" maxlength="6" class="form__input form__input--pin confirm-pin" />
                    <button class="form__btn form__btn--close cerrar-cuenta">&rarr;</button>
                    <label class="form__label ">Confirm user</label>
                    <label class="form__label ">Confirm PIN</label>
                </form>
            </div>

        </>

    )
}

export default Operar