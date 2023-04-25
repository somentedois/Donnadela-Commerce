const { Enderecos, sequelize } = require('../databases/models');

async function teste(){
    const enderecos = await Enderecos.findAll();
    console.log(enderecos.map(c => c.toJSON()));
    sequelize.close();
}

teste()