import React from 'react'

function UserData({data}) {
    console.log(data)
    return (
        <div className='colo-md-6 user-data w-50 bg-warning p-3'>
            <div className="datos-usuario d-flex justify-content-center lh-sm text-sm ">
                <div className="datos-usuario1 d-fles flex-column ">
                    <p className=" fw-bold"> Nombre</p>
                    <p className=" fs-6 nombre-usuario "> {data.account.owner}</p>

                    <p className="fw-bold "> Usuario:</p>
                    <p className=" fs-6 usuario">{data.account.username} </p>

                </div>
                <div className="datos-usuario2" >
                    <p className=" fw-bold"> Direccion:</p>
                    <p className=" fs-6 direccion-usuario"> {data.account.address} </p>
                    <p className="fw-bold "> Pais:</p>
                    <p className=" fs-6 pais-usuario"> {data.account.country}</p>


                </div>
                <div className="datos-usuario3" >
                    <p className="fw-bold"> DNI:</p>
                    <p className=" fs-6 dni-usuario">{data.account.nationalIdNumber} </p>
                    <p className="fw-bold "> Cuenta:</p>
                    <p className=" fs-6 cuenta-usuario"> {data.account.numberAccount}</p>
                </div>

            </div>

        </div>
    )
}

export default UserData







