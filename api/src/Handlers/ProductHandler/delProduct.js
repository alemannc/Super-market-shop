const axios = require("axios");

const deleteProduct = require("../../Controllers/productController/deleteProductDb");

const delProduct = async (req,res)=>{
    const {id}=req.params;
    try {
        const productId= await deleteProduct(id);
        res.status(200).json(productId);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=delProduct;
//asdasd