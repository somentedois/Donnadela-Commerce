const { Clientes } = require('../databases/models');
const bcrypt = require('bcrypt');


const ClientesControllers = {
    store: async (req, res) => {
        const senhaCrypto = bcrypt.hashSync(req.body.senha, 10);
        
        const clienteCriado = await Clientes.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaCrypto
         });
        return res.send(clienteCriado);
    }
}

module.exports = ClientesControllers;