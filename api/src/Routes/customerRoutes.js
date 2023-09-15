const express = require('express');
const customerRouter =express.Router();
const getCustomerById =require('../Handlers/customerHandler/getCustomerById');
const getCustomers = require('../Handlers/customerHandler/getCustomers');
const postCustomer = require('../Handlers/customerHandler/postCustomer');
const delCustomer = require('../Handlers/customerHandler/delCustomer');
const putCustomer = require('../Handlers/customerHandler/putCustomer');
const byEmail = require('../Handlers/customerHandler/byEmailHandler');
const login = require('../Handlers/customerHandler/loginCustomer');

customerRouter.post('/login',(req,res)=>{
    login(req,res);
});

customerRouter.get('/email',(req,res)=>{
    byEmail(req,res);
});

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

    