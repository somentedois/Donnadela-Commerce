module.exports = (sequelize, DataTypes) => {

    const Enderecos = sequelize.define(
        'Enderecos',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            cliente_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cep: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            endereco: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            numero: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            bairro: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            estado: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            estado: {
                type: DataTypes.CHAR(2),
                allowNull: false
            }
        },
        {
            tableName: 'enderecos',
            timestamps: false
        }
    )
    return Enderecos;
}
