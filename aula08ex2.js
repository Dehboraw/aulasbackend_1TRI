/*
Exercício 2 (vale nota)
CRIAR UM "BANCO DE DADOS" DE ALGUMA DAS SEGUINTES CATEGORIAS:
LIVROS, FILMES, SÉRIES, JOGOS, ANIMES.
USANDO OBJETOS, COM PELO MENOS 10 ELEMENTOS. 10 livros

SEGUIR O MODELO ABAIXO:
*/

const livros = [
    {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    paginas: 460,
    sinopse: "A obra retrata um futuro totalitário em uma sociedade vigiada constantemente pelo 'Grande Irmão', onde o Partido controla todos os aspectos da vida, alterando a história e limitando o pensamento através da 'novilíngua'.",
    preco: 50.00
    },
    {
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    ano: 1938,
    paginas: 176,
    sinopse: "Narra a luta pela sobrevivência de uma família de retirantes sertanejos (Fabiano, Sinhá Vitória, dois filhos e a cachorra Baleia) fugindo da seca e da miséria no Nordeste brasileiro.",
    preco: 39.90 
    },
    {
    titulo: "Clara dos Anjos",
    autor: "Lima Barreto",
    ano: 1948,
    paginas: 240,
    sinopse: "O romance, ambientado no subúrbio do Rio de Janeiro no início do século XX, narra a história de Clara dos Anjos, uma jovem mulata, pobre e ingênua. Ela é seduzida e enganada por Cassi Jones de Azevedo, um malandro branco de classe média que costuma engravidar e abandonar moças pobres da região. ",
    preco: 49.90 
    },
    {
    titulo: "Os Homens de Barro",
    autor: "Ariano Suassuna",
    ano: 2003,
    paginas: 136,
    sinopse: "É uma peça teatral que narra a história de uma seita mística baseada em um fato real do século XIX (1836), ocorrido na Pedra Bonita. A trama foca no personagem Elias, que, após ter visões, convence seguidores a esculpir anjos de barro e prega o retorno 'encantado' de Dom Sebastião, gerando conflitos amorosos e religiosos, especialmente quando seu filho Abel decide deixar o grupo com Joana. ",
    preco: 29.90 
    },
    {
    titulo: "As Aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    ano: 1892,
    paginas: 300,
    sinopse: "Uma coletânea de 12 contos publicados pela primeira vez em 1892, onde Holmes resolve casos complexos como Um Escândalo na Boêmia e A Liga dos Cabeças Vermelhas.",
    preco: 29.90 
    },
    {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes Saavedra",
    ano: 1615,
    paginas: 1200,
    sinopse: "A obra narra as aventuras de Alonso Quijano, um fidalgo de meia-idade que, de tanto ler romances de cavalaria, perde o juízo e decide tornar-se um cavaleiro andante sob o nome de Dom Quixote de La Mancha.",
    preco: 99.90 
    },
    {
    titulo: "Quincas Borba",
    autor: "Machado de Assis",
    ano: 1891,
    paginas: 360,
    sinopse: "O romance narra a história de Rubião, um ingênuo professor de Barbacena que herda a fortuna do filósofo louco Quincas Borba (personagem apresentado em Memórias Póstumas de Brás Cubas). Com a herança, vem a responsabilidade de cuidar do cachorro, também chamado Quincas Borba. Ao se mudar para o Rio de Janeiro, Rubião é explorado por falsos amigos (Cristiano Palha e Sofia) e mergulha na loucura, gastando toda a sua fortuna enquanto tenta entender a filosofia do 'Humanitismo' (cujo lema é 'ao vencedor as batatas').",
    preco: 44.90 
    },
    {
    titulo: "O Alienista",
    autor: "Machado de Assis",
    ano: 1882,
    paginas: 88,
    sinopse: "A obra narra a história do Dr. Simão Bacamarte, um médico dedicado que decide investigar a 'saúde da alma' na pequena cidade de Itaguaí. Ele constrói a Casa Verde, um manicômio, e passa a internar qualquer pessoa que demonstre o mínimo desvio de conduta ou excentricidade, definindo a loucura de forma arbitrária.",
    preco: 19.90 
    },
    {
    titulo: "1984",
    autor: "Autor",
    ano: 9999,
    paginas: 333,
    sinopse: "Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra\nHarry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, nº 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!",
    preco: 99.90 
    },
    {
    titulo: "1984",
    autor: "Autor",
    ano: 9999,
    paginas: 333,
    sinopse: "Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra\nHarry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, nº 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!",
    preco: 99.90 
    }   
]