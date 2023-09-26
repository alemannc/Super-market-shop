const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Buy",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      // iduser: {
      //      type: DataTypes.UUID,
      //      allowNull: true,
      //      references: {
      //          model: 'Customers',
      //          key: 'id',
      //      }
      //  },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechapago: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      payer: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cart: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};