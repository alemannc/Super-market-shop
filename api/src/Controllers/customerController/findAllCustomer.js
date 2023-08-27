const axios = require('axios');
const {Customer}=require('../../db');


const findAllCustomer = async() =>{
    const customerFind= await Customer.findAll();

    if(customerFind.length>0){
        return customerFind;
        }else{
            return []
        }    
} 


module.exports = findAllCustomer
