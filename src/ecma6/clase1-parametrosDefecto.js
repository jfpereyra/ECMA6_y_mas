// -------------------    Default Params 
//Antes de ECMA 6
function imprimirNombre(name, age, country){
    var name = name || 'Juan'
    console.log(name)
}

imprimirNombre()
imprimirNombre('Pepe')

//Con ECMA 6
function imprimirNombreE6(name = 'Juan', age = 34, country = 'AR'){
    console.log(name)
}

imprimirNombreE6()
imprimirNombreE6('Pepe')

// -------------------    Concatenación

let hola = 'Hello'
let world = 'World'
let phrase = hola + ' ' + world
console.log(phrase)

//Con ECMA 6
console.log(`${hola} ${world}`)