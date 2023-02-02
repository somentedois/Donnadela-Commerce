const section = document.querySelector('section');
const btBuscar = document.querySelector(".btBuscar");
const campoDeBusca = document.getElementById("campo-de-busca");

let produtos = [
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

function showProdutos(produto) {
    let div = document.createElement("div")

    div.innerHTML = `
    <img src="${produto.img}" 
    alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <span>R$ ${produto.preco}</span>
        <a href="${produto.id}">Ver mais</a>
        <button>Add+</button>
    `;

    section.appendChild(div);
    
}

function showProdutos(produtos){
    section.innerHTML = '';

    produtos.forEach(showProdutos)
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
    const produtosFiltrados = filtrarProdutos(produtos, trechoBuscado);

    // Mostrar as pizzas filtradas
    showProdutos(produtosFiltrados);
}

campoDeBusca.addEventListener('keyup', onCampoDeBuscaKeyup);
showProdutos(produtos);