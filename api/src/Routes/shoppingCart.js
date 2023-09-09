const express = require("express")
const shoppingCartRouter =express.Router();
const postShoppingCart = require ("../Handlers/shoppingCartHandler/postSCHandler")
const putSCHandler= require('../Handlers/shoppingCartHandler/putSCHandler')
const getSCHandler = require('../Handlers/shoppingCartHandler/getSCHandler')
const getShoppingCartById= require("../Handlers/shoppingCartHandler/ByIdSCHandler")

shoppingCartRouter.post('/',(req,res)=>{
    postShoppingCart(req,res);
});

shoppingCartRouter.put('/',(req,res)=>{
    putSCHandler(req,res);
});

shoppingCartRouter.get('/',(req,res)=>{
    getSCHandler(req,res);
});




shoppingCartRouter.get('/:id', (req,res)=>{
    getShoppingCartById(req,res);
});


module.exports= shoppingCartRouter;