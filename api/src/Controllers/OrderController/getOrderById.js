
const { Order } = require('../../db');


const getOrderById= async (id)=>{

    const OrderById = await Order.findByPk(id)
    if(OrderById){
        return OrderById;
    }else{
        new Error( "there is no order with that id");
    }
}


module.exports = getOrderById; 
