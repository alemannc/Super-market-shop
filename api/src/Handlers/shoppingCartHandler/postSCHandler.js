const createShoppingCart = require("../../Controllers/shoppingCartController/postShoppingCart")


const postShoppingCart = async (req,res)=>{
    const {ProductName,PriceTotal,customerId} = req.body;
    console.log(ProductName,PriceTotal,customerId, "HANDLEER")
    
    try {
        if(!ProductName){
            res.status(401).json({error:'Missing data. Product Name!'});
        }else if(PriceTotal<0){
            res.status(401).json({error:'Missing data. Price Total!'});
        }
        else if(!customerId){
            res.status(401).json({error:'Missing data. CustomerId!'});
        }
        else{
            const newShoppingCart= await createShoppingCart({ProductName,PriceTotal},customerId);
            res.status(200).json(newShoppingCart);
        }
    } catch (error) {
        res.status(500).json({catch:'Shopping Cart not created'+ error.message});
    }

}

module.exports= postShoppingCart;