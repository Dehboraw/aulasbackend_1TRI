// JSON: JavaScript Object Notation
// É uma notação para traduzir objetos JavaScript em texto

const alunos = [
    {
        nome: "João",
        dataNasc: "10/10/2009",
        turma: "3ºDSC"
    },
    {
        nome: "Maria",
        dataNasc: "05/05/2010",
        turma: "3ºDSB"
    },
    {
        nome: "José",
        dataNasc: "01/01/2010",
        turma: "2ºDSB"
    }
]

const alunosJSON = JSON.stringify(alunos)
console.log(alunos)
console.log(alunosJSON)

const alunosOBJ = JSON.parse(alunosJSON)
console.log(alunosOBJ)

//Criando um arquivo
function criaArquivo(obj){
    const dadosJSON = JSON.stringify(obj)
    const fs = require("fs")//tipo um import
    fs.writeFileSync("alunos.json", dadosJSON) // Vai escrever no arquivo "(arquivo novo ou arquivo já existente(q vai ser reescrito))", dados que eu traduzir para texto.)
}

criaArquivo(alunos)

// Lendo um arquivo JSON
const arquivo = require("./alunos.json")
console.log(arquivo)