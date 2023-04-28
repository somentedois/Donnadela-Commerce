module.exports = (sequelize, DataTypes) => {
    const Produtos = sequelize.define(
        'Produtos',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            categoria_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            preco:{
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            destaque:{
                type: DataTypes.STRING(45),
                allowNull: false
            },
            score: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
            {
            tableName: 'produtos',
            timestamps: false
        }
    )
    return Produtos;
}
