const axios = require("axios");
const findCustomerById = require("../../Controllers/customerController/findCustomerById");

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
  };

  module.exports=getCustomerById;