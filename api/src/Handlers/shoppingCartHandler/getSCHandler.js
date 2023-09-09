const findAllShoppingCart = require("../../Controllers/shoppingCartController/findAllShoppingCart");


const getSCHandler = async (req, res) => {
    try{
    const shopingCart = await findAllShoppingCart();
    if(shopingCart.length === 0){
        res.status(404).send({message:"No orders to show yet"});
    }
    else {
        res.status(200).send( shopingCart );
    }       
    } catch(error){
    res.status(500).send({error:error})
    }
};

module.exports = getSCHandler;