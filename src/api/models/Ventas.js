const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ventas",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "MercadoPago",
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

