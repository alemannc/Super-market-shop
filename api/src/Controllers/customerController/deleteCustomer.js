const { Customer } = require("../../db");

const deleteCustomer = async (id) => {
  const customerFind = await Customer.findByPk(id);

  await customerFind.destroy();
  return id;
};

module.exports = deleteCustomer;
