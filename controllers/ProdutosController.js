const { Produtos } = require('../databases/models')

const ProdutosController = {
    index: (req, res) => {
        return res.status(200).json(produtos);
    },
        
    listagemProdutos: async (req, res) => {
        const listaProdutos = await Produtos.findAndCountAll({
            where: {
                nome: req.body.nome,
                preco: req.body.preco
            }
        });

        return res.redirect ('/lista-produto',(listaProdutos))
    }
}

module.exports = ProdutosController;