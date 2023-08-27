const axios = require('axios');
const {Customer}=require('../db');
const {Op} = require('sequelize');

const findAllCustomer = async() =>{
    const customerFind= await Customer.findAll();

    if(customerFind.length>0){
        return customerFind;
        }else{
            return []
        }    
} 

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

const findCustomerById = async(id) =>{
   const customerFind = await Customer.findByPk(id);

   if(customerFind){
    return customerFind
}else{
    return null;
}
}

const createCustomer= async ({name,email,address,password,phone})=>{
    const customer={
        name:name,
        email:email,
        address:address,
        password:password,
        phone:phone,
    }
    const newCustomer= await Customer.create(customer);
    return newCustomer;
}

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

const deleteCustomer= async(id)=>{
    const customerFind = await Customer.findByPk(id);

    if (!customerFind) {
        throw new Error('Customer not found');
    }

    await customerFind.destroy();
    return id


}

module.exports={
    findAllCustomer,
    findCustomerByName,
    findCustomerById,
    createCustomer,
    updateCostumer,
    deleteCustomer
}
