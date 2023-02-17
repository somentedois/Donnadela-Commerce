const express = require('express');
const PaginasController = require('./controllers/PaginasControllers');
const router = express.Router();

// Definir as rotas para o roteador
router.get('/', PaginasController.index)

router.get('/carrinho', PaginasController.carrinho)

router.get('/perfil-de-usuario', PaginasController.perfilUsuario);

router.get('/cadastro', PaginasController.cadastro);

router.get('/login', PaginasController.login);

router.get('/pagina-produtos', PaginasController.paginaProduto);

router.get('/checkout-endereco', PaginasController.checkoutEndereco);

router.get('/checkout-pagamento', PaginasController.checkoutPagamento);

router.get('/finalizar-pagamento', PaginasController.finalizarPagamento);

router.get('/confirmacao-compra', PaginasController.confirmacaoCompra);

router.get('/editar-perfil', PaginasController.editarPerfil);

router.get('/editar-endereco', PaginasController.editarEndereco);

router.get('/pesquisa', PaginasController.pesquisa);

router.get('/lista-produto', PaginasController.listaProduto);

router.get('/form-add-produto', PaginasController.adicionarProduto);

router.get('/form-edit.produto.ejs', PaginasController.form-edit.produto);


// Exportar o roteador
module.exports = router;
