const {ShoppingCart,Customer} = require ("../../db")

const createShoppingCart = async({ProductName,PriceTotal,customerId})=>{
    const customer = await Customer.findByPk(customerId);
    if(customer){
        const newShoppingCart = await ShoppingCart.create({ProductName,PriceTotal,CustomerId:customerId})
        return newShoppingCart
    }else{
        throw new Error("the customer not exist") 
    }
}

module.exports= createShoppingCart;