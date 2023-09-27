const axios = require('axios');
const {Customer, Buy}=require('../../db');


const findCustomerById = async(id) =>{
    const customerFind = await Customer.findByPk(id, {
        include: [{ model: Buy }],
      });

    if(customerFind){
        // console.log("🚀 ~ file: findCustomerById.js:12 ~ findCustomerById ~ customerFind:", customerFind)
     return customerFind
 }else{
     return null;
 }
 }

module.exports = findCustomerById;