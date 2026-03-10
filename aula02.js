// const = variável constante, o valor armazenado não pode ser alterado
// let = variável local 
// var = variável global
const v1 = 1500
const v2 = "2"      //se colocar as "", o dado vira string, daí não faz contas, apenas junta como se fosse texto. Então vai precisar fazer conversão

const soma = v1 + Number(v2) //conversão para número
const sub = v1 - v2
const mul = v1 * v2
const div = v1 / v2

console.log("A soma é: "+ soma)
console.log("A subtração é: "+ sub)
console.log("A multiplicação é: "+ mul)
console.log("A divisão é: "+ div) // se dividir por zero, é infinito