const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('options',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true, 
        },
        name_option : {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    });
}