const axios = require('axios');
const getOrderDetailById = require ("../../Controllers/orderDetailController/getOrderDetailById")

const getDetailById = async (req,res)=>{
    let id = req.params.id
    try {
    let orderDetail = await getOrderDetailById(id)
    if(orderDetail){
        res.status(200).json({message:"succes order detail", orderById:orderDetail})
    }else{
        res.status(404).json({message:"error getting detail", error:error})};
    } catch (error) {
        res.status(500).json({error:error});
    }
}

module.exports= getDetailById;