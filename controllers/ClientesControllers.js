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
        // Cria uma propriedade na sessão para armazenar o ID do usuário cadastrado
        req.session.userId = clienteCriado.id;

        return res.send(clienteCriado);
    }
}

module.exports = ClientesControllers;