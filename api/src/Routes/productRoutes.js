const express = require('express');
const productRouter =express.Router();
const postProduct = require("../Handlers/ProductHandler/postProduct.js");
const getallProducts = require("../Handlers/ProductHandler/getallProducts.js");

productRouter.post('/',(req,res)=>{
    postProduct(req,res);
});
    
productRouter.get('/',(req,res)=>{
    getallProducts(req,res);
});
    

module.exports = productRouter;