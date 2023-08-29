const { DataTypes } = require('sequelize');


module.exports = (sequelize) => sequelize.define('orderDetail', {
  orderId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderDate:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
  subPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{ timestamps: false });

// Define las relaciones con otros modelos si es necesario
// Order_Detail.belongsTo(Product, { foreignKey: 'Porduct_Id' });
// Order_Detail.belongsTo(Customer, { foreignKey: 'Customer_Id' });


