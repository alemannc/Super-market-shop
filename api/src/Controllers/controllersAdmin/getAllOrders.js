const { Order } = require("../db");

const allOrderUsers = async () => {
  const allOrder = await Order.findAll();
  return allOrder;
};

module.exports = allOrderUsers;
