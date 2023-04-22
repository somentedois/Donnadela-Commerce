module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
        'Pedido',
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
            }
        },
        {
            tableName: 'pedido',
            timestamps: false
        }
    )
}
