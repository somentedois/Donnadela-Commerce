// 1 - Importar o express
const express = require('express');
const path = require('path');
const registraRequisicao = require('./middlewares/registraRequisicao');
const session = require('express-session');
const router = require('./router');



// 2 - Criar o servidor
const servidor = express();

servidor.set('view engine', 'ejs')


servidor.use(session({
    secret: 'CHAVE_SECRETA',
    resave: false,
    saveUninitialized: false
}));

servidor.use(express.urlencoded({ extended: false }));

servidor.use(express.static(path.join(__dirname, 'public')))

servidor.use(registraRequisicao)


servidor.use(function(req, res, next) {
    console.log('ID da sessão:', req.session.id);
    next();
});

servidor.use(router);


// 4 - Por o servidor no modo "aguardando requisições"
servidor.listen(3000);