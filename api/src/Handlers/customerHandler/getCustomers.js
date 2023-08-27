const axios = require("axios");
const findCustomerByName = require("../../Controllers/customerController/findCustomerByName");
const findAllCustomer = require("../../Controllers/customerController/findAllCustomer");

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
  };

  module.exports=getCustomers;