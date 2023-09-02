const axios = require('axios');
const createOrder =require ("../../Controllers/mercadoPagoController/payment")

const postOrderMP = async(req,res)=>{

    try {
        const order = createOrder()
        if(order){
            res.status(200).json({Order:order, message:"Order complete"})
        }else{
            res.status(404).json({error:'Error to complete order'});
        }
    } catch (error) {
        res.status(500).json({error:error});
    }

}

module.export=postOrderMP;