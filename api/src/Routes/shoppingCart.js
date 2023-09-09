const express = require("express")
const shoppingCartRouter =express.Router();
const postShoppingCart = require ("../Handlers/shoppingCartHandler/postSCHandler")
const putSCHandler= require('../Handlers/shoppingCartHandler/putSCHandler')
const getSCHandler = require('../Handlers/shoppingCartHandler/getSCHandler')

shoppingCartRouter.post('/',(req,res)=>{
    postShoppingCart(req,res);
});

shoppingCartRouter.put('/',(req,res)=>{
    putSCHandler(req,res);
});

shoppingCartRouter.get('/',(req,res)=>{
    getSCHandler(req,res);
});




module.exports= shoppingCartRouter;