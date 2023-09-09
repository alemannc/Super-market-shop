const express = require("express")
const shoppingCartRouter =express.Router();
const postShoppingCart = require ("../Handlers/shoppingCartHandler/postSCHandler")
const getShoppingCartById= require("../Handlers/shoppingCartHandler/ByIdSCHandler")

shoppingCartRouter.post('/',(req,res)=>{
    postShoppingCart(req,res);
});

shoppingCartRouter.get('/:id', (req,res)=>{
    getShoppingCartById(req,res);
});


module.exports= shoppingCartRouter;