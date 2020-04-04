// INCLUDES EN ARRAYS
let numeros = [1,2,3,7,8]

if (numeros.includes(7)){
    console.log('TRUE')
} else{
    console.log('FALSE')
}

//Se obtiene resultado igual con Some
var respuesta = numeros.some( (numero) => {
    return numero === 7
})

console.log(`Con some: ${respuesta}`)

// ELEVAR A LA POTENCIA
let base = 4
let exponent = 3
let resultado = base ** exponent

console.log(resultado)

console.log(resultado)