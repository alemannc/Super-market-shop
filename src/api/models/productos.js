const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('producto',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
         
        },

        sku:{
            type : DataTypes.STRING(25),
            allowNull:false,  
        },

        name:{
            type:DataTypes.STRING(25),
            allowNull:false,
        }
    });
}