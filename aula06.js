// funções 
// o programador dá o nome da função e pode configurar parâmetros que serão recebidos.
// As funções permitem executar um mesmo código, só chamando a função.
function calcularMedia(nota1, nota2){ // criar uma função, pode ter variáveis dentro da função.
    let media = (nota1 + nota2)/2
    return "A média é " + media
}

console.log(calcularMedia(10, 4))

const furia = ["FalleN", "molodoy", "KSCERATO", "yuuriih", "YEKINDAR"]
function mostrarTime(){       // verbo + objeto
    let indice = 0
    while(indice < furia.length){
        console.log(furia[indice])
        indice++ // ++ soma 1
    }
}   
mostrarTime() // só precisa escrever a função, a função pode ser jogada lá para cima.

