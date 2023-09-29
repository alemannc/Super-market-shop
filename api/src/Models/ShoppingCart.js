const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("ShoppingCart", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    ProductName: {
        type:  DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
    },
    PriceTotal: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: true,
    },
},{ timestamps: false });


