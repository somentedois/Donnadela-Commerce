const { Formas_De_Pagamento, sequelize } = require('../databases/models');

async function teste(){
    const formas_de_pagamento = await Formas_De_Pagamento.findAll();
    console.log(formas_de_pagamento.map(c => c.toJSON()));
    sequelize.close();
}

teste()