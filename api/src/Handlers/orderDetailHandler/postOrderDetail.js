const axios = require("axios");
const createOrderDetail = require("../../Controllers/orderDetailController/createOrderDetail");

const postOrderDetail = async (req,res)=>{
        const {  subPrice, cantidad } = req.body;
    
        if( !subPrice || !cantidad){
            res.status(401).json({error:'Missing data!'});
        }    
        try {
            
            const newOrderDetail = await createOrderDetail({subPrice,cantidad})
            res.status(200).json({message:"succes create!", OrderDetail:newOrderDetail})
        } catch (error) {
            return res.status(500).json({ error: 'Error creating order detail' });
        }
};

module.exports = postOrderDetail;