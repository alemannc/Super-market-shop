const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("ShoppingCart", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
    },

    QuantityProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SubPrice: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    PriceTotal: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    }
}, { timestamps: false });


