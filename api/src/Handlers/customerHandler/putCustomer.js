const axios = require("axios");
const updateCostumer = require("../../Controllers/customerController/updateCostumer");

const putCustomer = async (req,res)=>{
    const {customer_id,name,email,address,password,phone} = req.body;

    if(!customer_id||!name||!email||!address||!password||!phone){
        res.status(401).json({error:'Missing data!'});
    }
    
    try {
        const updatedCustomer= await updateCostumer(customer_id,{name,email,address,password,phone});
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({error:'Customer not modified: ' + error.message});
    }

}

module.exports=putCustomer;
//asdasd