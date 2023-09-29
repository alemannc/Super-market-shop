const axios = require('axios');
const {Customer}=require('../../db');


const updateCostumer = async ({id,name,email,address,password,phone,role,provider})=>{   
    const customerFind = await Customer.findByPk(id);
    if (!customerFind) {
        throw new Error('Customer not found');
    }

    customerFind.id = id;
    customerFind.name = name;
    customerFind.email = email;
    customerFind.address = address;
    customerFind.password = password;
    customerFind.phone = phone;
    customerFind.role = role;
    customerFind.provider = provider;
    await customerFind.save();

    return customerFind;
}

module.exports = updateCostumer;