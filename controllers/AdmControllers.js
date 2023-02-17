const produtoServices = require("../services/produtoServices");

const AdmController = {
    listarProdutos: (req, res)=>{
    
    const produtos = produtoServices.carregarProdutos();

    res.render('lista-produtos.ejs', {produtos})

    },

    criarProduto: (req, res)=>{
        res.render('form-add-produto.ejs');
    },

    gravarProduto: (req,res)=>{
        let produto = {
            nome: req.body.nome,
            preco: Number(req.body.preco),
            img: "/img/no-image.png",
            destaque: false,
            score: 0
        }
        produtoServices.adicionarProduto(produto);

        res.redirect('/adm/produtos');

    },

    editarProduto: (req, res)=>{
        let id = req.params.idDoProduto;

        const produto = produtoServices.carregarProdutos(id);

        // mandar a pizza ser exibida...
        return res.render('form-edit.produto.ejs', {produto});
    }

}





module.exports = AdmController;