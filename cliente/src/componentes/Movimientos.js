import React from 'react'
import "./movimientos.css"

function Movimientos({data}) {
  
   const movements=data.account.movements
   
   return (
    <div>
    {movements.map((mov, i) => {
      const type = mov.amount > 0 ? 'deposit' : 'withdrawal';
      return (
        <div className={`movements__row d-flex justify-content-around `} key={i}>
          <span className="fs-5 text-info me-1">${i + 1} </span>
          <div className={`movements__type movements__type--${type}`}>{type}</div>
          <div className="d-flex flex-column">
            <div className="movements__value">${mov.amount}€</div>
            <div className="date">{mov.date.slice(0, 10)}</div>
          </div>
        </div>
      );
    })}
  </div>
  );
}

export default Movimientos

