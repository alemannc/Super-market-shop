const axios = require("axios");
const updateCostumer = require("../../Controllers/customerController/updateCostumer");

const putCustomer = async (req,res)=>{
    const {id,name,email,address,password,phone,role,provider} = req.body;

    if(!id||!name||!email||!address||!password||!phone||!role||!provider){
        res.status(401).json({error:'Missing data!'});
    }
    
    try {
        const updatedCustomer= await updateCostumer({id,name,email,address,password,phone,role,provider});
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({error:'Customer not modified: ' + error.message});
    }

}

module.exports=putCustomer;
//asdasd