const { Customer } = require("../db");

const allUsers = async () => {
  const users = await Customer.findAll();
  return users;
};

module.exports = allUsers;
