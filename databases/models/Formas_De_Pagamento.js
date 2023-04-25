module.exports = (sequelize, DataTypes) => {
    const Formas_De_Pagamento = sequelize.define(
        'Formas_De_Pagamento',
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
            tableName: 'formas_de_pagamento',
            timestamps: false
        }
    )
    return Formas_De_Pagamento;
}
