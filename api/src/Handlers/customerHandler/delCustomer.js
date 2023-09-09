const axios = require("axios");
const deleteCustomer = require("../../Controllers/controllersAdmin/deleteCustomer");

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