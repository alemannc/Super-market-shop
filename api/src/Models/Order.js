const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
       customerID: {
            type: DataTypes.UUID,
            allowNull: true,
            Referecens: {
                model: 'Customer',
                key: 'customer_ID',
            }
        },
        orderDetail: {
            type: DataTypes.JSON,
            allowNull: false, 
        },
        orderAdress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            References: {
                model: 'Customer',
                key: 'email',
            }
        },
        oderDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },

        
    })
};