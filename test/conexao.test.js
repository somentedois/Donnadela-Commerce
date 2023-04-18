const sequelize = require('sequelize');

const config = require('../databases/config').development

const conexao = new sequelize(config);

async function fazConsulta(){
    const resultado = await conexao.query("SHOW TABLES;");
    console.log(resultado);
}
fazConsulta();