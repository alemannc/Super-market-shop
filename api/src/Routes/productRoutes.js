const express = require('express');
const productRouter =express.Router();
const postProduct = require("../Handlers/ProductHandler/postProduct")



productRouter.post('/',(req,res)=>{
    postProduct(req,res);
});
    


module.exports = productRouter;