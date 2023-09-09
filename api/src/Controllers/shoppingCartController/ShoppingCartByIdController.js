const { Customer } = require("../../db");

const findShoppingCartById = async (id) => {
  const customer = await Customer.findByPk(id);
  console.log(id)
  return customer;
};

module.exports = findShoppingCartById;