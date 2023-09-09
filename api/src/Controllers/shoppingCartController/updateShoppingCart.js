const axios = require('axios');
const {ShoppingCart}=require('../../db');


const updateShoppingCart = async (shoppingId,{QuantityProduct,ProductName,SubPrice,PriceTotal})=>{   
    const ShoppingCartFind = await ShoppingCart.findByPk(shoppingId);
    if (!ShoppingCartFind) {
        throw new Error('Shopping car not found');
    }

    ShoppingCartFind.QuantityProduct = QuantityProduct;
    ShoppingCartFind.ProductName = ProductName;
    ShoppingCartFind.SubPrice = SubPrice;
    ShoppingCartFind.PriceTotal = PriceTotal;
    await ShoppingCartFind.save();

    return ShoppingCartFind;
}

module.exports = updateShoppingCart;