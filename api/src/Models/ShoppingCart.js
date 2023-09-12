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
        type:  DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    SubPrice: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: false,
    },
    PriceTotal: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
},{ timestamps: false });


