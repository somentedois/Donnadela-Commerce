const section = document.querySelector('.box');
const campoDeBusca = document.getElementById("campo-de-busca");
const { Produtos } = require('../../databases/models')


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
/*function filtrarProdutos(produtos, trechoBuscado){
    let produtosFiltrados = produtos.filter(
        produto => produto.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return produtosFiltrados;
}*/

async function filtrarProdutos(){
    const produtosFiltrados = await Produtos.findAll({where: nome})

    const trechoBuscado = campoDeBusca.value;

    const produtoFiltrado = filtrarProdutos(produtosFiltrados, trechoBuscado);
    
    showProdutos(produtoFiltrado);
}
function onCampoDeBuscaKeyup(){
    
    // Capturar o trecho buscado pelo usuário
    const trechoBuscado = campoDeBusca.value;

    // Criar um array com as pizzas filtradas
    const produtosFiltrados = filtrarProdutos(produtosFiltrados, trechoBuscado);

    // Mostrar as pizzas filtradas
    showProdutos(produtosFiltrados);
}

campoDeBusca.addEventListener('keyup', onCampoDeBuscaKeyup);

showProdutos(produtos)