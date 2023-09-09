const { Customer } = require("../../db");

const createCustomer = async ( name, email, address, password, phone ) => {
const newCustomer = await Customer.create({ name, email, address, password, phone });  
return newCustomer;
};

module.exports = createCustomer;
