const section = document.querySelector('.box');
const btBuscar = document.querySelector(".btBuscar");
const campoDeBusca = document.getElementById("campo-de-busca");


let produtosDaLoja = [
    {
        "id": 1,
        "nome": "Piercing Umbigo",
        "preco": 38.5,
        "img": "/img/foto1.jpg",
        "destaque": true,
        "score": 27
    },
    {
        "id": 2,
        "nome": "Piercing Orelha",
        "preco": 48.55,
        "img": "/img/foto2.jpg",
        "destaque": false,
        "score": 24
    },
    {
        "id": 3,
        "nome": "Piercing Nariz",
        "preco": 38.5,
        "img": "/img/foto3.jpg",
        "destaque": true,
        "score": 12
    },
]

function showProduto(produto) {
    let article = document.createElement("article")

    article.innerHTML = `
        <img src="${produto.img}" alt="${produto.nome}">
        <h4>${produto.nome}</h4>
        <h2>R$ ${produto.preco}</h2>
        `;
    section.appendChild(article);
}

function showProdutos(produtos){
    section.innerHTML = '';

    produtos.forEach(showProduto);
}

function filtrarProdutos(produtos, trechoBuscado){
    let produtosFiltrados = produtos.filter(
        produto => produto.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return produtosFiltrados;
}

function onCampoDeBuscaKeyup(){
    
    // Capturar o trecho buscado pelo usuário
    const trechoBuscado = campoDeBusca.value;

    // Criar um array com as pizzas filtradas
    const produtosFiltrados = filtrarProdutos(produtosDaLoja, trechoBuscado);

    // Mostrar as pizzas filtradas
    showProdutos(produtosFiltrados);
}

campoDeBusca.addEventListener('keyup', onCampoDeBuscaKeyup);
showProdutos(produtos);

console.log(produtos);