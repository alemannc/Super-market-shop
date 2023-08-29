const axios = require('axios');
const {OrderDetail}=require('../../db');

  const createOrderDetail= async ({subPrice, cantidad})=>{
    let params={subPrice:subPrice,cantidad:cantidad}
    const newOrderDetail = await OrderDetail.create(params);
      return newOrderDetail
}


module.exports = createOrderDetail;

