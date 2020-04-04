let name = 'Juan'
let age = 34

//Antes
obj = {
    name: name, 
    age: age
}

console.log(obj)

//Con ECMA6
obj2 = {
    name,
    age
}

console.log(obj2)

//ARROW FUNCTION (Menos código y un "this" no vinulado)
const names = [
    {name: 'Juan', age: 34} , 
    {name: 'Yesica', age: 30}
]

//Antes
let listOfNames = names.map( function (item) {
    console.log(item.name)
})

//Con Arrow Function (ECMA6)
let listOfNames2 = names.map( item => console.log(item.name) )

// const listOfNames3 = (name, age, country) => {
//   ...  
// }

const square = num => num * num

//PROMESAS con ECMA6

const helloPromise = () => {
    return new Promise( (resolve, reject) => {
        if (true){
            resolve('Yey')
        }else{
            reject('Ups')
        }
    })
}

helloPromise()
    .then( respuestaOK => console.log(respuestaOK))
    .then( () => console.log('Hola'))
    .catch( respuestaError => console.log(respuestaError))