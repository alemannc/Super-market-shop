const axios = require("axios");
const {
  findCustomerById,
  findCustomerByName,
  findAllCustomer,
  createCustomer,
  updateCostumer,
  deleteCustomer,
} = require("../Controllers/costumerController");

const getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customerFind = await findCustomerById(id);
    if (customerFind) {
      res.status(200).json(customerFind);
    } else {
      res.status(404).json({ mje: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: `Error: ${error.message}`,
    });
  }
};//

const getCustomers = async (req, res) => {
  const { name } = req.query;
  if (Number.isInteger(Number(name))) {
    res.status(400).json({ error: "no puede ser un numero" });
  }
  try {
    if (!name){
      const allCustomes = await findAllCustomer();
      res.status(200).json(allCustomes);
    } else{
    const customersByName = await findCustomerByName(name);
    if (customersByName.length === 0) {
      res.status(404).json({ message: "Customers not found" });
    } else {
      res.status(200).json(customersByName);
    }
    }
  } catch (error) {
    res.status(500).json({ error: `Error: ${error.message}` });
  }
};//


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

}//

const putCustomer = async (req,res)=>{
    const {customer_id,name,email,address,password,phone,role} = req.body;
    console.log('Recibida solicitud de actualización de usuario:', req.params.id);
    if(!customer_id||!name||!email||!address||!password||!phone||!role){
        res.status(401).json({error:'Missing data!'});
    }
    
    try {
        const updatedCustomer= await updateCostumer(customer_id,{name,email,address,password,phone,role});
        res.status(200).json(updatedCustomer);
        console.log('Usuario actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
        res.status(500).json({error:'Customer not modified: ' + error.message});
    }
}

const delCustomer = async (req,res)=>{
    const {id}=req.params;
    try {
        const CustomerId= await deleteCustomer(id);
        res.status(200).json(CustomerId);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={
  getCustomerById,
  getCustomers,
  postCustomer,
  putCustomer,
  delCustomer,
}


