//http://juanmirod.github.io/2017/09/11/Generadores-JavaScript.html

function* counterGenerator() {
    let i = 0
    while (true) {
      yield i
      i++
    }
  }
  
var counter = counterGenerator()

console.log(counter.next().value) // { value: 0, done: false }
console.log(counter.next()) // { value: 1, done: false }
console.log(counter.next()) // { value: 2, done: false }

// --------------------------------------------------------------

function* helloWorld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'World'
    }
}

const generadorHello = helloWorld()
console.log(generadorHello.next())

console.log(generadorHello.next())

console.log(generadorHello.next())




