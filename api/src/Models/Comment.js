const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Comment = sequelize.define(
        "Comment",
        {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
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
        },
        { timestamps: false }
    );
};


