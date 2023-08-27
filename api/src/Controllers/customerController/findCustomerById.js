const axios = require('axios');
const {Customer}=require('../../db');


const findCustomerById = async(id) =>{
    const customerFind = await Customer.findByPk(id);
 
    if(customerFind){
     return customerFind
 }else{
     return null;
 }
 }

module.exports = findCustomerById;