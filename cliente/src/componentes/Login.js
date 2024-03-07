import React, { useRef,useEffect, useState } from "react";
import "./login.css";
import { login } from "../functions/login";
import UserData from "./UserData";
import Movimientos from "./Movimientos";
import Operar from "./Operar";

function Login() {
  const [user, setUser] = useState("");
  const [pin, setPin] = useState("");
  const [logued, setLogued] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [saldo, setSaldo] = useState(0);
  const [token, setToken] = useState("");

  const updateSaldo = (amount) => {
    console.log(saldo,amount)
    setSaldo(saldo+amount);
    const newData = JSON.parse(JSON.stringify(data))
    newData.account.movements.push({amount:amount, date:new Date().toISOString()})  
    setData(newData)
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = await login(user, pin);
    if (datos) {
      setData(datos);
      setLogued(true);
      console.log(datos.account.movements);
      const movemetsArr = datos.account.movements.map((obj) => {
        return Number(obj.amount);
      });
      const balance = movemetsArr.reduce((previous, current) => {
        return previous + current;
      }, 0);
      console.log(balance);
      console.log(datos.token);
      setSaldo(balance);
      setToken(datos.token);
    }
  };

  return (
    <>
      <div className="  login row p-0">
        {logued && <UserData data={data} />}

        <form className="col-md-6  mt-3 m-0">
          <div className="d-flex justify-content-end p-3 bg-warning ms-auto m-0">
            <div className="mb-3 mx-3 ">
              <label className="form-label">usuario</label>
              <input
                type="text"
                className="form-control input-user"
                id="userId"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                usa tus credenciales
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label ">pin</label>
              <input
                type="text"
                className="form-control input-pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center ms-2 btn-login">
              <p type="submit" className="h-25 " onClick={handleSubmit}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </p>
            </div>
          </div>
          <div className="saldo bg-warning">SALDO: {saldo}€ </div>
        </form>
        {error && <p>todos los campos son obligatotios</p>}
      </div>
      {logued && (
        <div className="row">
          <div className=" col-md-6 movements">
            <Movimientos data={data} saldo={saldo} />
            <div className="saldo bg-info-subtle">SALDO: {saldo}€ </div>
          </div>
          <div className=" col-md-6 operaciones">
            <Operar data={data} saldo={saldo} token={token} user={user} updateSaldo={updateSaldo}/>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
