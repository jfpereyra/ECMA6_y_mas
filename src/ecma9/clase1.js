// OPERADOR DE REPOSO
const obj = {
    name: 'Juan',
    age: 34,
    country: 'AR'
}

let {
    name, ...all
} = obj

console.log(name)
console.log(all)

// PROPAGACION (Unir objetos)
const obj1 = {
    name: 'Juan',
    age: 34
}
const obj2 = {
    ...obj1,
    country: 'AR'
}
console.log(obj2)

// PROMISE.FINALLY

const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            setTimeout( () => resolve('Hello World'),3000 ) 
        }else{
            reject(new Error('Error Test'))
        }
    }
    )
}

helloWorld()
.then (response => console.log(response))
.catch (reject2 => console.log(reject2))
.finally( () => console.log('Finalizó') )

// REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]

console.log(match)