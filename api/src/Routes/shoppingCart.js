const express = require("express")
const shoppingCartRouter =express.Router();
const postShoppingCart = require ("../Handlers/shoppingCartHandler/postSCHandler")
const updateShoppingCart= require('../Handlers/shoppingCartHandler/putSCHandler')
const getShoppingCartById= require("../Handlers/shoppingCartHandler/ByIdSCHandler")

shoppingCartRouter.post('/',(req,res)=>{
    postShoppingCart(req,res);
});

shoppingCartRouter.put('/',(req,res)=>{
    updateShoppingCart(req,res);
});




shoppingCartRouter.get('/:id', (req,res)=>{
    getShoppingCartById(req,res);
});


module.exports= shoppingCartRouter;