const { Produtos } = require('../databases/models')

const ProdutosController = {
        
    listagemProdutos: async (req, res) => {
        const produto = await Produtos.findAll();

        res.render ('lista-produto.ejs', {produto})
    }
}

module.exports = ProdutosController;