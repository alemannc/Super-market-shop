const axios = require("axios");
const sendEmailConPlantilla = require("../../Nodemailer/sendEmailConPlantilla.js");
const createCustomer = require("../../Controllers/customerController/createCustomer");

const postCustomer = async (req,res)=>{
    const {name,email,address,password,phone,role,provider} = req.body;

    if(!name||!email||!address||!password||!phone||!role||!provider){
        res.status(401).json({error:'Missing data!'});
    }
    if (email) {
        sendEmailConPlantilla(email, "newCustomer");
      }
    
    try {
        const newCustomer= await createCustomer({name,email,address,password,phone,role,provider});
        res.status(200).json(newCustomer);
    } catch (error) {
        res.status(500).json({error:'Customer not created'});
    }

}

module.exports=postCustomer;
//asdasd