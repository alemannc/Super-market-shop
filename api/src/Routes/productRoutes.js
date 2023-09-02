const express = require('express');
const productRouter =express.Router();
const postProduct = require("../Handlers/ProductHandler/postProduct.js");
const getallProducts = require("../Handlers/ProductHandler/getallProducts.js");
const stockLogicalDeleteHandler = require('../Handlers/ProductHandler/putStockLogicalDelete.js')

productRouter.post('/',(req,res)=>{
    postProduct(req,res);
});
    
productRouter.get('/',(req,res)=>{
    getallProducts(req,res);
});

productRouter.get('/',(req,res)=>{
    getBrands(req,res);
});
    
productRouter.put('/:productId',(req,res)=>{
    stockLogicalDeleteHandler(req,res);
});


module.exports = productRouter;