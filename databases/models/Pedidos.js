module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define(
        'Pedidos',
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
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            forma_pagamento_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            obs: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            total: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            endereco_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
            {
            tableName: 'pedidos',
            timestamps: false
        }
    )
    return Pedidos;
}
