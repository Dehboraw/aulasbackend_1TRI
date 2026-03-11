//OBJETOS
let produtos = [
    {
    nome: "Leite",
    valor: 5,
    peso: "1L",
    codBarras: 1112334029,
    infNutricionais: "Sódio: 121, Kcal: 220"
    },
    {
    nome: "X-lagartixa",
    valor: 20,
    peso: "500g",
    codBarras: 1078934029,
    infNutricionais: "Sódio: 2000, Kcal: 890"
    }
]
indice = 0
while (indice < produtos.length){
    console.log(produtos[indice].nome + " - R$ " + produtos[indice].valor + " , " + produtos[indice].peso)
    indice++
}

// FOR
console.log("Imprimindo com o FOR")
for(let i = 0; i < produtos.length; i++){ // variável inicial, condição de parada, soma 
    console.log(produtos[i].nome + " - R$ " + produtos[i].valor + " , " + produtos[i].peso)
}

// array.forEach() => lista.paraCada()
console.log("Imprimindo com o forEach()")
produtos.forEach((produto) => {
    console.log(produto.nome + " - R$ " + produto.valor + " , " + produto.peso)
})
