const axios = require('axios');
const {Customer}=require('../../db');


const deleteCustomer= async(id)=>{
    const customerFind = await Customer.findByPk(id);

    if (!customerFind) {
        throw new Error('Customer not found');
    }

    await customerFind.destroy();
    return id


}

module.exports = deleteCustomer;