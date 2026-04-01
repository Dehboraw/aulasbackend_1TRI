/*
Exercício 2 (vale nota)
CRIAR UM "BANCO DE DADOS" DE ALGUMA DAS SEGUINTES CATEGORIAS:
LIVROS, FILMES, SÉRIES, JOGOS, ANIMES.
USANDO OBJETOS, COM PELO MENOS 10 ELEMENTOS. 10 livros
*/

// Função de criar um arquivo JSON
function criarArquivo (obj){
    const dadosJSON = JSON.stringify(obj)
    const fs = require("fs")
    fs.writeFileSync("livros.json", dadosJSON)
}

//criarArquivo(livros)

//Função Ler arquivo
let arquivo
function lerArquivo(){
    arquivo = require("./livros.json")
    console.log("Arquivo lido com sucesso") 
}

lerArquivo()
//console.log(arquivo)

// Função organiar lista
function organizarLista(lista){
    console.log("##### ESTOQUE DE LIVROS #####")
    lista.forEach((livro) => {
        console.log("-")
        console.log(livro.titulo + " - " +
                    livro.autor + ", Ano: " +
                    livro.ano + ", Páginas: " +
                    livro.paginas + ", Preço: R$" +
                    livro.preco.toFixed(2).replaceAll(".",",")  + "\nSinopse: " +
                    livro.sinopse)
    })
}

organizarLista(arquivo)
