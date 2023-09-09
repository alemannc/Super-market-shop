const { Customer } = require("../../db");

const putCustomer = async (customerId, updatedData) => {

    // Buscar el cliente existente en la base de datos
    const customer = await Customer.findByPk(customerId);
     
    customer.name = updatedData.name || customer.name;
    customer.email = updatedData.email || customer.email;
    customer.address = updatedData.address || customer.address;
    customer.password = updatedData.password || customer.password;
    customer.phone = updatedData.phone || customer.phone;
  
    await customer.save();
  
    return customer;
  };

module.exports = putCustomer;