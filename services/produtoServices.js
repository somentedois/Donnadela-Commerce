const produtos = require('../databases/produtos.json');
const fs = require('fs');
const path = require('path');

function carregarProdutos(){
    return produtos;
};

function adicionarProduto(produto){
    // Criar um ID para a pizza
    if(produtos.length > 0){
        produto.id = produtos[produtos.length - 1].id + 1;
    } else {
        produto.id = 1;
    }

    // Adicionar pizza ao array de pizzas
    produtos.push(produto);

    // Salvar este array no arquivo pizzas.json
    salvar();
}

function alterarProduto(idDaProduto, dadosDoProduto){
    let produto = produtos.find(p => p.id == idDaProduto);
    if(produto == undefined){
        throw new Error("Produto inexistente");
    }

    produto.nome = dadosDoProduto.nome;
    produto.preco = dadosDoProduto.preco;
    produto.destaque = dadosDoProduto.destaque;
    produto.score = dadosDoProduto.score;

    salvar();
}

function salvar(){
    const caminhoParaArquivo = path.resolve(__dirname + "/../databases/produtos.json");
    fs.writeFileSync(caminhoParaArquivo, JSON.stringify(produtos, null, 4));
}

const PizzasServices = {
    carregarProdutos,
    adicionarProduto,
    alterarProduto,
    /*removerPizza,
    alterarPizza*/
}
module.exports = PizzasServices;
