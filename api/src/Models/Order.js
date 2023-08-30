const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "Order",
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      order_detail: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      order_adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      order_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      order_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
