const axios = require('axios');
const {Customer}=require('../../db');
const {Op} = require('sequelize');

const findCustomerByName = async(name) =>{
    const customerFind= await Customer.findAll({
        where: {
            name: {
              [Op.iLike]: `%${name}%`
            }
          },
    });

    if(customerFind.length>0){
        return customerFind;
        }else{     
        return [];
        }
}

module.exports = findCustomerByName;