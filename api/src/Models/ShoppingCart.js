const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("ShoppingCart", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
    },
},{ timestamps: false });


