const findProductByCategory = require("../../Controllers/productController/findProductByCategory");


const getProductsByCategory = async (req, res) => {
    const {id} = req.params;
    try {
    const Products = await findProductByCategory(id);
      res.status(201).json(Products);
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  };

  module.exports = getProductsByCategory;