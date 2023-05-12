const path = require('path');
const produtosDaLoja = require('../databases/produtos.json');
const { Clientes } = require('../databases/models');

const PaginasController = {

    index: (req, res) => {
        return res.render('index.ejs');
    },

    carrinho: (req, res) => {
        return res.render('carrinho.ejs');
    },

    cadastro: (req, res) => {
        return res.render('cadastro.ejs');
    },

    login: (req, res) => {
        return res.render('login.ejs');
    },

    paginaProduto: (req, res) => {
        return res.render('pagina-produtos.ejs');
    },

    checkoutEndereco: (req, res) => {
        return res.render('checkout-endereco.ejs');
    },

    checkoutPagamento: (req, res) => {
        return res.render('checkout-pagamento.ejs');
    },

    finalizarPagamento: (req, res) => {
        return res.render('finalizar-pagamento.ejs');
    },

    confirmacaoCompra: (req, res) => {
        return res.render('confirmacao-compra.ejs');
    },

    perfilUsuario: async (req, res) => {
        const {id} = req.params;
        const usuario = await Clientes.findByPk(id, {
            include: 'enderecos'
        })
        console.log(usuario);
        return res.render('perfil-de-usuario.ejs', {usuario});
    },

    editarPerfil: (req, res) => {
        return res.render('editar-perfil.ejs');
    },

    editarEndereco: (req, res) => {
        return res.render('editar-endereco.ejs');
    },

    pesquisa: (req, res) => {
        let trecho = req.query.busca;

        let filtroProdutos = produtos => {
            let produtoBuscado = produtos.nome.toLowerCase().includes(trecho.toLowerCase());
            return produtoBuscado;
        }
        let produtosFiltrados = produtosDaLoja.filter(filtroProdutos)

        return res.render('pesquisa.ejs', {produtos: produtosFiltrados});


    },

    formEditProduto: (req, res) => {
        return res.render('form-edit-produto.ejs');
    },    
    listaProduto: (req, res) => {
        return res.render('lista-produto.ejs');
    },
    adicionarProduto: (req, res) => {
        return res.render('form-add-produto.ejs');
    }

}

module.exports = PaginasController;