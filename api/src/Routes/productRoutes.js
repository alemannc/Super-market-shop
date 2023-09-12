const express = require('express');
const productRouter =express.Router();
const postProduct = require("../Handlers/ProductHandler/postProduct.js");
const getallProducts = require("../Handlers/ProductHandler/getallProducts.js");
const getProductById = require("../Handlers/ProductHandler/findProductByid.js")
const stockLogicalDeleteHandler = require('../Handlers/ProductHandler/putStockLogicalDelete.js')
const ProductByName = require('../Handlers/ProductHandler/findProductByName.js')

productRouter.post('/',(req,res)=>{
     postProduct(req,res);
//  console.log("🚀 ~ file: productRoutes.js:11 ~ productRouter.post ~ req:", req.files)
 });
    
productRouter.get('/name',(req,res)=>{
   ProductByName(req, res);
   
 });

productRouter.get('/',(req,res)=>{
    getallProducts(req,res);

 });

productRouter.get('/:id',(req,res)=>{
    getProductById(req,res);
});

productRouter.get('/',(req,res)=>{
    getBrands(req,res);
});
    
productRouter.put('/:productId',(req,res)=>{
    stockLogicalDeleteHandler(req,res);
});



module.exports = productRouter;