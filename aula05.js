//LISTAS
//índice: sempre inicia em 0
//                   0         1            2
const esportes = ["futsal", "volei", "tênis de mesa"]
const taxaIncricao = [10,      12,          5       ]

let contador = 0 
while(contador < esportes.length){
    console.log(esportes[contador] + " - R$"  + taxaIncricao[contador])
    contador = contador + 1
}

// adiciona no final
esportes.push("xadrez")
taxaIncricao.push(10)
console.log(esportes)

// remover do final
esportes.pop() // o pop remove o último
console.log(esportes)

// remover um intem específico
esportes.splice(1, 1, "queimada", "cs2") // remove a partir do índice especificado, qtd de intens removidos , adicionar intens
console.log(esportes)