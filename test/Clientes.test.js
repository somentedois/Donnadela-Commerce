const { Clientes, sequelize } = require('../databases/models');

async function teste(){
    const clientes = await Clientes.findAll();
    console.log(clientes.map(c => c.toJSON()));
    sequelize.close();
}

teste()