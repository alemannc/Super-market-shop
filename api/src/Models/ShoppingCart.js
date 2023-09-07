const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('ShoppingCart', {
    ShoppingCartId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CustomerID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Customer',
            key: 'customerID',
        }
    },
    ProductId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Product',
            key: 'id',
        }
    },
    OrderId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Order',
            key: 'Id',
        }
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


