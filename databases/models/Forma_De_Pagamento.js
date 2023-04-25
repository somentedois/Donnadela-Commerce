module.exports = (sequelize, DataTypes) => {
    const Formas_De_Pagamento = sequelize.define(
        'Formas de Pagamento',
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
            }
        },
        {
            tableName: 'forma_de_pagamento',
            timestamps: false
        }
    )
    return Formas_De_Pagamento;
}
