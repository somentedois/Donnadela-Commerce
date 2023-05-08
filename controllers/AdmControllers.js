const produtoServices = require("../services/produtoServices");
const fs = require('fs');
const bcrypt = require('bcrypt');
const { Produtos } = require('../databases/models');


const AdmController = {
    listarProdutos: async (req, res)=>{
    
    const produtos = await produtoServices.carregarProdutos();

    return res.render('lista-produtos.ejs', {produtos})

    },

    criarProduto: async (req, res)=>{
        produto = await Produtos.findAll();
       return res.render('form-add-produto.ejs', {produtos});
    },

    gravarProduto: async (req,res)=>{

        let novoNome = req.body.nome.replace(' ', '-').toLowerCase() + '.jpg';
        fs.renameSync(req.file.path, `public/img/${novoNome}`)

        let produto = {
            nome: req.body.nome,
            ingredientes: req.body.ingredientes,
            preco: Number(req.body.preco),
            img: `/img/${novoNome}`,
            destaque: false,
            score: 0
        }

        await produtoServices.adicionarProduto(produto);

       return res.redirect('/adm/produtos');

    },

    editarProduto: async (req, res)=>{
        let id = req.params.idDoProduto;

        const produto = await produtoServices.carregarProdutos(id);

        // mandar a pizza ser exibida...
        return res.render('form-edit.produto.ejs', {produto});
    }

}





module.exports = AdmController;