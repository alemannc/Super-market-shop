const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('customer', {
        customer_ID: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
  
    },{ timestamps: false });
  };