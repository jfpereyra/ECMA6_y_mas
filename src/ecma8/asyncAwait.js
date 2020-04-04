const helloWord =  () => {
    return new Promise( (resolve, reject) => {
        if(true){
            setTimeout( () => resolve('Hello World'), 3000)
        } else{
            reject(new Error('Error Test'))
        }
    }
    ) 
} 

// const helloAsync = async () => {
//     const hello = await helloWord()
//     console.log(hello)
// }


const anotherFunction = async () => {
    try{
        const hello = await helloWord()
        console.log(hello)
    }
    catch{
        console.log(error)
    }
}

anotherFunction()
