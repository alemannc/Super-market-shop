const axios = require("axios");
const updateShoppingCart = require("../../Controllers/shoppingCartController/updateShoppingCart");

const putCustomer = async (req,res)=>{
    const {shoppinId,QuantityProduct,ProductName,SubPrice,PriceTotal}= req.body;

    if(!shoppinId||!QuantityProduct||!ProductName||!SubPrice||!PriceTotal){
        res.status(401).json({error:'Missing data!'});
    }
    
    try {
        const updatedShopping= await updateShoppingCart(shoppinId,{QuantityProduct,ProductName,SubPrice,PriceTotal});
        res.status(200).json(updatedShopping);
    } catch (error) {
        res.status(500).json({error:'Shopping cart not modified: ' + error.message});
    }

}

module.exports=putCustomer;