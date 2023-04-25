const { Clientes } = require('../databases/models');

const ClientesControllers = {
    store: async (req, res) => {
        const clienteCriado = await Clientes.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
         });
        return res.send(clienteCriado);
    }
}

module.exports = ClientesControllers;