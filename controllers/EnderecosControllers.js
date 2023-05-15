const { Enderecos } = require('../databases/models');
const { Clientes } = require('../databases/models');

const EnderecosControllers = {
    criarEndereco: async (req, res) => {
        const id = req.params.id;
        const usuario = await Clientes.findByPk(id, {
            include: 'enderecos'
        })
        return res.render('editar-endereco.ejs', {usuario});
    },

    gravarEndereco: async (req, res) =>{
        const {id} = req.params;
        const endereco = await Clientes.Enderecos.create({
            endereco: req.body.endereco,
            cep: req.body.cep,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            complemento: req.body.complemento
        }) 

        return res.render('editar-endereco.ejs', {endereco});
    }
      
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
    
}

module.exports = EnderecosControllers;