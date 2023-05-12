module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define(
        'Clientes',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },

        {
            tableName: 'clientes',
            timestamps: true
        }
        
    )

    Clientes.associate = models => {
        Clientes.hasMany(models.Enderecos, {
            foreignKey: 'cliente_id',
            as: 'enderecos'
        })
    }
    return Clientes;
}