const { Enderecos } = require('../databases/models');
const { Clientes } = require('../databases/models');

const EnderecosControllers = {
    criarEndereco: async (req, res) => {
        const id = req.params.id;

        const cliente = await Clientes.findByPk(id)
        console.log(cliente)

        /*const enderecoCriado = {
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero,
            bairro: req.body.bairro,
            estado: req.body.estado,
            cidade: req.body.cidade,
        };
        
        await cliente.criarEndereco(enderecoCriado);
        
        return res.redirect('/');*/
    },
}

module.exports = EnderecosControllers;