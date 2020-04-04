//Multilíneas Antes
let lorem = 'asdasd asdasd asd \n'
+ 'Segunda línea'

console.log(lorem)

//Multilíneas con ECMA6
let lorem2 = `asdasd asdasd asddasdas asdasd asdas 
Segunda línea`
console.log(lorem2)

// -------------- DESESTRUCTURAR OBJETOS
//Antes
let personaOscar = {
    nombre: 'Oscar',
    edad: 34,
    pais: 'AR'
}

console.log(personaOscar.nombre, personaOscar.edad, personaOscar.pais)

//Con ECMA6
let {nombre, edad, pais} = personaOscar
console.log(nombre, edad, pais)

// --------------- PROPAGACION (Spread Operator)
// Con ECMA6
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)

// --------------- LET y CONST
