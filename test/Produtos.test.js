const { Produtos, sequelize } = require('../databases/models');

async function teste(){
    const produtos = await Produtos.findAll();
    console.log(produtos.map(c => c.toJSON()));
    sequelize.close();
}

teste()