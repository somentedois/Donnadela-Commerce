const { Categorias, sequelize } = require('../databases/models');

async function teste(){
    const categorias = await Categorias.findAll();
    console.log(categorias.map(c => c.toJSON()));
    sequelize.close();
}

teste()