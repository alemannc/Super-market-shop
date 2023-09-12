const { ShoppingCart } = require("../../db");

const findShoppingCartById = async (id) => {
     const ShoppingCartFind = await ShoppingCart.findOne({
           where: {CustomerId: id}   
          });      
          return ShoppingCartFind; };

module.exports = findShoppingCartById;