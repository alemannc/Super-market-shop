const getAllOrders = require("../../Controllers/OrderController/getAllOrders");


const getAll = async (req, res) => {
    try{
    const orders = await getAllOrders();
    if(orders.length === 0){
        res.status(404).send({message:"No orders to show yet"});
    }
    else {
        res.status(200).send( orders );
    }       
    } catch(error){
    res.status(500).send({error:error})
    }
};

module.exports = getAll;
