module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define(
        'Categorias',
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
            tableName: 'categorias',
            timestamps: false
        }
    )
}
