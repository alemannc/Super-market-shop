const axios = require("axios");
<<<<<<< HEAD
<<<<<<< HEAD
const deleteCustomer = require("../../Controllers/customerController/createCustomer");
=======
const deleteCustomer = require("../../Controllers/customerController/deleteCustomer");
>>>>>>> c41f3551096a4619f91a6ed96b09d6fd0504bb81
=======

const deleteCustomer = require("../../Controllers/customerController/deleteCustomer");
>>>>>>> e14ba9bb212a579172d62248e508ad2a9546a02e

const delCustomer = async (req,res)=>{
    const {id}=req.params;
    try {
        const CustomerId= await deleteCustomer(id);
        res.status(200).json(CustomerId);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=delCustomer;
//asdasd