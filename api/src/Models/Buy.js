const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Buy",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "stripe",
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      card: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};