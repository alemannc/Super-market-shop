const axios = require('axios');
const {ShoppingCart}=require('../../db');


const updateShoppingCart = async (shoppingId,{ProductName,PriceTotal})=>{   
    const ShoppingCartFind = await ShoppingCart.findByPk(shoppingId);
    if (!ShoppingCartFind) {
        throw new Error('Shopping car not found');
    }

    ShoppingCartFind.ProductName = ProductName;
    ShoppingCartFind.PriceTotal = PriceTotal;
    await ShoppingCartFind.save();

    return ShoppingCartFind;
}

module.exports = updateShoppingCart;