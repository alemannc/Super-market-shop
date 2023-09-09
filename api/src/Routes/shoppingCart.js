const express = require("express")
const shoppingCartRouter =express.Router();
const postShoppingCart = require ("../Handlers/shoppingCartHandler/postSCHandler")

shoppingCartRouter.post('/',(req,res)=>{
    postShoppingCart(req,res);
});




module.exports= shoppingCartRouter;