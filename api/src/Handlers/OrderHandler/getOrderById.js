
const getOrderById = require('../../Controllers/OrderController/getOrderById');

const orderById = async (req, res) => {
    const id = req.params.id
    //console.log("🚀 ~ file: getOrderById.js:6 ~ orderById ~ d:", id)
    try {
        const oderId = await getOrderById(id);
        if(oderId){
            res.stauts(200).send(oderId);
        }
        else{
            res.status(404).send("Order Id not found");
        }
    } catch{
    res.status(500).send("Este es el 500");
    }
};

module.exports = orderById;