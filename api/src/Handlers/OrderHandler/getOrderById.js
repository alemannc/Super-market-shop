
const getOrderById = require('../../Controllers/OrderController/getOrderById');

const orderById = async (req, res) => {
    const {id} = req.params;
    // console.log(id);
    //console.log("🚀 ~ file: getOrderById.js:6 ~ orderById ~ d:", id)
    try {
        const orderId = await getOrderById(id);
        if(orderId){
            res.status(200).send(id);
        }
        else{
            res.status(404).send("Order Id not found");
        }
    } catch{
    res.status(500).send("Este es el 500");
    }
};

module.exports = orderById;