class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }
    sumar(A, B){
        this.valueA = A
        this.valueB = B
        return this.valueA + this.valueB
    }
}

const calc = new calculator();

console.log(calc.sumar(1,3))