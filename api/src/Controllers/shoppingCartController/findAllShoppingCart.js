const axios = require('axios');
const {ShoppingCart}=require('../../db');


const findAllShoppingCart = async() =>{
    const shoppingCartFind= await ShoppingCart.findAll();

    if(shoppingCartFind.length>0){
        return shoppingCartFind;
        }else{
            return []
        }    
} 


module.exports = findAllShoppingCart
