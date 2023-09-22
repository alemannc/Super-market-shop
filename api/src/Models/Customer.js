const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Customer', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            unique: true,
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
          role: {
            type: DataTypes.ENUM("user", "admin", "BAN"),
            defaultValue: "user",
          },
          provider: {
            type: DataTypes.ENUM("local", "google", "facebook"),
            defaultValue: "local",
          },
  
    },{ timestamps: false });
  };