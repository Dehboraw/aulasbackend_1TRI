const av1 = 5.0;
const av2 = 7.0;
const recup1 = 4.0;
const recup2 = 10.0;
// primeiro comparamos as duas notas separadas, para ver qual é maior, só então fazemos uma média entre as MAIORES notas. 
//se recuperação 1 for maior que av1
if (recup1 >= av1){
    //verdadeiro
    nota1 = recup1 // agora é criado a variável nota1 que vai armazenar o valor da recup1. 
    console.log("Recuperação é maior")
} else {
    nota1 = av1
    console.log("Primeira nota é maior")
}
//No fim, apenas a nota que estiver de acordo com a condição que será guardada. 
if (recup2 >= av2){
    //verdadeiro
    nota2 = recup2 // salva a nota da recup1 em nota1
    console.log("Recuperação 2 é maior")
} else {
    nota2 = av2
    console.log("Primeira nota é maior")
}

media = (nota1 + nota2)/2 
console.log("A média do aluno é: "+ media)
if (media >= 6){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}