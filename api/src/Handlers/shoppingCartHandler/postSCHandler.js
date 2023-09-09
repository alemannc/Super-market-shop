const createShoppingCart = require("../../Controllers/shoppingCartController/postShoppingCart")


const postShoppingCart = async (req,res)=>{
    const {QuantityProduct,ProductName,SubPrice,PriceTotal,customerId} = req.body;
    console.log(QuantityProduct,ProductName,SubPrice,PriceTotal,customerId, "HANDLEER")
    
    try {
        if(!QuantityProduct||!ProductName||!SubPrice||!PriceTotal||!customerId){
            res.status(401).json({error:'Missing data!'});
        }else{

            const newShoppingCart= await createShoppingCart({QuantityProduct,ProductName,SubPrice,PriceTotal,customerId});
            res.status(200).json(newShoppingCart);
        }
    } catch (error) {
        res.status(500).json({error:'Shopping Cart not created'});
    }

}

module.exports= postShoppingCart;