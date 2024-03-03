import enviarMensaje from './mensajes.js'

export default function realizarTransferencia(transferAmount,transferTo, user,token,saldo) {
    
    console.log(transferAmount,transferTo, user,token)
  
  
    console.log(saldo, user,transferAmount,transferTo)
  
    let movementToAdd = {
      destinationAccount: transferTo,
      amount: transferAmount,
    }
  
    if (transferAmount > Number(saldo)) {
      enviarMensaje('saldo insuficiente ,no se pudo realizar')
      console.log('saldo insuficiente')
      return
    }
  
    enviarObjetoAlServidor(movementToAdd)
    const movAnadido=document.createElement('div')
    const date=new Date()
    
  /*   const html=`
    <div class="movements__row d-flex justify-content-around ">
          <span class="fs-5 text-info me-1"></span><div class="movements__type movements__type--withdrawal"> Transferencia </div>
            <div class="d-flex flex-column ">
                <div class="movements__value">${movementToAdd.amount}€</div>
                <div class="date">${date}</div>
            </div>
          </div>
    ` */
  
  
   
  
  
    async function enviarObjetoAlServidor(movementToAdd) {
      try {
        const urlTrans = `http://localhost:4000/transfer?token=${token}`
  
        const response = await fetch(urlTrans, {
          method: 'POST', // Método de la solicitud POST
          headers: {
            'Content-Type': 'application/json', // Tipo de contenido JSON
          },
          body: JSON.stringify(movementToAdd), // Convertir el objeto a JSON y enviarlo en el cuerpo de la solicitud
        })
  
        if (!response.ok) {
          throw new Error('La solicitud falló')
        }
  
        const data = await response.json() // Parsear la respuesta JSON
        console.log('Respuesta del servidor:', data)
  
        return data // Devolver la respuesta del servidor si es necesario
      } catch (error) {
        console.error('Hubo un error:', error)
        // Manejar errores aquí si es necesario
      }
    }
  }