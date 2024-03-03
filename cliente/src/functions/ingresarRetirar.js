export function ingresar(ingreso, user,token,e) {
    
    console.log(ingreso)
    const ingresarUrl = `http://localhost:4000/movements?token=${token}`
    console.log('desde ingresar', e, ingreso, user);
    const movement = {
        amount: ingreso,
        date: new Date().toISOString()
    }
    

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movement) // Convertir el objeto a formato JSON
    };

    // Realizar la solicitud fetch al servidor
    fetch(ingresarUrl, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red');
            }
            return response.json(); // Parsear la respuesta JSON
        })
        .then(data => {
            // Manejar la respuesta del servidor
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
      
}
export function retirar( retirada,user,token,e) {
    console.log(retirada)
    const retirarUrl = `http://localhost:4000/movements?token=${token}`
    const retiradaObj = {
        amount: -retirada,
        date: new Date().toISOString()
    }
    console.log('desde retirar', e, retirada, user);

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(retiradaObj) // Convertir el objeto a formato JSON
    };

    // Realizar la solicitud fetch al servidor
    fetch(retirarUrl, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red');
            }
            return response.json(); // Parsear la respuesta JSON
        })
        .then(data => {
            // Manejar la respuesta del servidor
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}