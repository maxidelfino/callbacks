let is_ok = false;
let production = () =>{
    return new Promise((resolve, reject) => { // Resolve(Resolver) - Reject(Rechazar) / recibe dos funciones como parámetros
        if (is_ok) {
            resolve('Ok')
        } else {
            reject('Not')
        }
    })
}

//front
production()
    .then((data)=> console.log(data)) //Si se cumple la promesa
    .catch((error) => console.log(error)) //Si no se cumple la promesa