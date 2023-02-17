const produtos = require('../databases/produtos.json');

const ProdutosController = {
    index: (req, res) => {
        return res.status(200).json(produtos);
    }
}

module.exports = ProdutosController;