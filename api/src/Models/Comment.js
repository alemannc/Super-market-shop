const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Comment = sequelize.define(
        "Comment",
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            Unique: true,
       
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calification: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
            min: 1,
            max: 5,
            },
        },
        userName: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "Customer"
        }
        },
        { timestamps: false }
    );
    return Comment;
};


