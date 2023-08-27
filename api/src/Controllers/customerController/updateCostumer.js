const axios = require('axios');
const {Customer}=require('../../db');


const updateCostumer = async (costumerId,{name,email,address,password,phone})=>{   
    const customerFind = await Customer.findByPk(costumerId);
    if (!customerFind) {
        throw new Error('Customer not found');
    }

    customerFind.name = name;
    customerFind.email = email;
    customerFind.address = address;
    customerFind.password = password;
    customerFind.phone = phone;
    await customerFind.save();

    return customerFind;
}

module.exports = updateCostumer;