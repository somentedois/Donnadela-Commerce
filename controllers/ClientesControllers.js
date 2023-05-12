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
        req.session.user = {
            id: clienteCriado.id,
            nome: clienteCriado.nome
        };

        return res.redirect('/');
    },

    userLogado: async (req, res) => {
        const logUser = await Clientes.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (logUser == undefined){
            return res.redirect('/login')
        }
        console.log(logUser)
        const senhaOk = bcrypt.compareSync(req.body.senha, logUser.senha)
        if(!senhaOk){
            return res.redirect('/login')
        }
        req.session.user = {
            id: logUser.id,
            nome: logUser.nome
        };

        return res.redirect('/');
    }
}


module.exports = ClientesControllers;