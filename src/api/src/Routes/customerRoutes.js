const express = require('express');
const customerRouter=express.Router();
const {
  getCustomerById,
  getCustomers,
  postCustomer,
  putCustomer,
  delCustomer,
}=require('../Handlers/customerHandler');

customerRouter.get('/:id', (req,res)=>{
    getCustomerById(req,res);
});
    
customerRouter.get('/',(req,res)=>{
    getCustomers(req,res);
});

    
customerRouter.post('/',(req,res)=>{
    postCustomer(req,res);
});
    
customerRouter.put('/',(req,res)=>{
    putCustomer(req,res);
});
    
customerRouter.delete('/:id',(req,res)=>{
    delCustomer(req,res);
});
    
    module.exports= customerRouter;