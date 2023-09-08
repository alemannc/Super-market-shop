const {ShoppingCart,Customer} = require ("../../db")

const createShoppingCart = async({QuantityProduct,ProductName,SubPrice,PriceTotal,customerId})=>{
    console.log(QuantityProduct,ProductName,SubPrice,PriceTotal,customerId, "CONTROLLER")
    const customer = await Customer.findByPk(customerId);
    if(customer){
        const newShoppingCart = await ShoppingCart.create({QuantityProduct,ProductName,SubPrice,PriceTotal,CustomerId:customerId})
        return newShoppingCart
    }else{
        throw new Error("the customer not exist") 
    }
}

module.exports= createShoppingCart;