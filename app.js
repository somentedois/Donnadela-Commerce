// 1 - Importar o express
const express = require('express');
const path = require('path');


const router = require('./router');


// 2 - Criar o servidor
const servidor = express();

servidor.set('view engine', 'ejs')

servidor.use(express.urlencoded({ extended: false }));

servidor.use(express.static(path.join(__dirname, 'public')))

servidor.use(router);


// 4 - Por o servidor no modo "aguardando requisições"
servidor.listen(3000);