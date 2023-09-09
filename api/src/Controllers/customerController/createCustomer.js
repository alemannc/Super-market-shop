const axios = require('axios');
const {Customer}=require('../../db');


const createCustomer= async ({name,email,address,password,phone,role,provider})=>{
    const customer={
        name:name,
        email:email,
        address:address,
        password:password,
        phone:phone,
        role:role,
        provider:provider,
    }
    const newCustomer= await Customer.create(customer);
    return newCustomer;
}

module.exports = createCustomer;