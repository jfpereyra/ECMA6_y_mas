let array = [1,2,3, [1,2,3, [1,2,3]]]

let arrayAplanado = array.flat() // Solo aplana el 1er nivel

let arrayAplanadoNivel2 = array.flat(2) //Hasta el segundo nivel

// FlatMap
let array2 = [1,2,3,4,5]
let array2FlatMap = array2.flatMap( (valor) => {valor, valor * 2})
console.log(array2FlatMap)

// TrimStart y TrimEnd
let hello = '      Hello World     '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())

// fromEntries (Convertir un Array a un Objetos)
let entries = [ ['name', 'Juan'], ['age', '34']]
let obj = Object.fromEntries(entries)

//

let mySymbol = `My symbol`
let simbolo = Symbol(mySymbol)
console.log(mySymbol)
console.log(simbolo)
console.log(simbolo.description)

let b = 'asd'
let b = 'fasdas'
