const axios = require('axios');
const {OrderDetail}=require('../../db');


const getOrderDetailById= async (id)=>{

    const OrderDetailById = await OrderDetail.findByPk(id);
    console.log(OrderDetailById)
    if(OrderDetailById){
        return OrderDetailById;
    }else{
        return null;
    }
}


module.exports = getOrderDetailById; 
