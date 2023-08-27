const axios = require("axios");
const createCustomer = require("../../Controllers/customerController/createCustomer");

const postCustomer = async (req,res)=>{
    const {name,email,address,password,phone} = req.body;

    if(!name||!email||!address||!password||!phone){
        res.status(401).json({error:'Missing data!'});
    }
    
    try {
        const newCustomer= await createCustomer({name,email,address,password,phone});
        res.status(200).json(newCustomer);
    } catch (error) {
        res.status(500).json({error:'Customer not created'});
    }

}

module.exports=postCustomer;
//asdasd