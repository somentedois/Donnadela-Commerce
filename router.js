const express = require('express');
const PaginasController = require('./controllers/PaginasControllers');
const ClientesControllers = require('./controllers/ClientesControllers');
const router = express.Router();
const verificaSeLogado = require('./middlewares/verificaSeLogado');
const AdmController = require('./controllers/AdmControllers');
const EnderecosControllers = require('./controllers/EnderecosControllers');


// Definir as rotas para o roteador

router.get('/adm/form-add-produto', AdmController.gravarProduto)

router.get('/adm/form-edit-produto', AdmController.editarProduto)

// Criar rotas para editar, deletar e upar produto

router.get('/', PaginasController.index);

/*router.get('/', function(req, res) {
    // Verifica se o usuário está conectado
    if (req.session.userId) {
    // Renderiza a página do perfil do usuário
      res.render('perfil', PaginasController.login, { userId: req.session.userId });
    } else {
    // Redireciona o usuário para a página de login
      res.redirect('/login', PaginasController.login);
    }
});*/

router.get('/carrinho', PaginasController.carrinho)

router.get('/perfil-de-usuario/:id', PaginasController.perfilUsuario);

router.get('/cadastro', PaginasController.cadastro);

router.post('/cadastro', ClientesControllers.store);

router.get('/login', PaginasController.login);

router.post('/login', ClientesControllers.userLogado);

router.get('/pagina-produtos', PaginasController.paginaProduto);

router.get('/checkout-endereco', PaginasController.checkoutEndereco);

router.get('/checkout-pagamento', PaginasController.checkoutPagamento);

router.get('/finalizar-pagamento', PaginasController.finalizarPagamento);

router.get('/confirmacao-compra', PaginasController.confirmacaoCompra);

router.get('/editar-perfil/:id', PaginasController.editarPerfil);

router.get('/editar-endereco/:id', PaginasController.editarEndereco);

router.post('/editar-endereco/:id', EnderecosControllers.criarEndereco);

router.get('/pesquisa', PaginasController.pesquisa);

router.get('/lista-produto', PaginasController.listaProduto);

router.get('/form-add-produto', PaginasController.adicionarProduto);

router.get('/form-edit-produto', PaginasController.formEditProduto);




// Exportar o roteador
module.exports = router;
